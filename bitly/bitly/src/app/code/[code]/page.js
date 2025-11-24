"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SECTIONS = ["about", "openTab", "mhCognition", "projects", "education", "cta"];

export default function HomePage() {
  const trackRef = useRef(null);
  const sectionRefs = useRef({});
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Dynamically assign refs to each section
    SECTIONS.forEach((sectionId) => {
      sectionRefs.current[sectionId] = document.getElementById(sectionId);
    });

    const handleScroll = () => {
      let currentActiveIndex = 0;
      let minDistance = Infinity;
      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;

      SECTIONS.forEach((sectionId, index) => {
        const sectionEl = sectionRefs.current[sectionId];
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distanceToCenter = Math.abs(viewportCenter - sectionCenter);

          // Only consider sections that are somewhat visible
          if (rect.bottom > 0 && rect.top < windowHeight) {
            if (distanceToCenter < minDistance) {
              minDistance = distanceToCenter;
              currentActiveIndex = index;
            }
          }
        }
      });
      setActiveIndex(currentActiveIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circleTopPercent =
    (activeIndex / Math.max(SECTIONS.length - 1, 1)) * 100;

  return (
    // Outer container takes up full width
    <div className="bg-slate-900 text-slate-100 relative">
      <div className="flex justify-center">
        
        {/* Fixed Central Timeline (Sticky) */}
        <div className="sticky top-0 h-screen w-0 flex justify-center z-10">
          <div
            ref={trackRef}
            className="relative h-full border-l-2 border-slate-700 w-px" // Use w-px or w-0 and rely on border for the line
          >
            {/* Moving Circle */}
            <div
              className="absolute -left-5 h-10 w-10 rounded-full bg-teal-400 shadow-[0_0_35px_rgba(45,212,191,0.9)] transition-all duration-300 ease-in-out flex items-center justify-center border-2 border-teal-200"
              style={{ 
                top: `calc(${circleTopPercent}% * (1 - 200 / ${SECTIONS.length} / 100) + 10vh)`, // Adjusted math for sticky timeline
                transform: "translateY(-50%)" 
              }}
            >
              <div className="h-3 w-3 rounded-full bg-teal-100 opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Content Container - Forces a wide space for left/right content */}
        <div className="max-w-7xl w-full flex flex-col items-center">
          
          {/* Mapping the data to create staggered sections */}
          {SECTIONS.map((sectionId, index) => {
            const isLeft = index % 2 === 0; // Content on the left for even indices (0, 2, 4...)
            const isActive = activeIndex === index;
            const content = getContent(sectionId);

            // Hide the actual section content when the timeline is sticky
            // const visibilityClass = isActive ? "opacity-100 scale-100" : "opacity-30 scale-98";

            return (
              <section
                key={sectionId}
                id={sectionId}
                className="min-h-screen w-full flex items-center justify-center relative" // Full viewport height
              >
                <div 
                  className={`max-w-3xl w-full flex items-center absolute ${
                    isLeft ? 'justify-start right-[50%]' : 'justify-end left-[50%]'
                  } transform ${isLeft ? 'translate-x-[50%] pr-16' : '-translate-x-[50%] pl-16'}
                  transition-all duration-700 ease-in-out
                  ${isActive ? "opacity-100 scale-100" : "opacity-30 scale-90"}` // Apply transition logic here
                  }
                >
                  <div className={`p-8 rounded-lg shadow-xl max-w-lg ${
                      isLeft ? 'bg-slate-800/80 text-right' : 'bg-slate-800/80 text-left'
                    } ${isActive ? 'shadow-teal-500/20' : ''}`}
                  >
                    {content}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Helper function to return content based on section ID
function getContent(sectionId) {
  switch (sectionId) {
    case "about":
      return (
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-teal-300">
            Shaik Rezwan Ali
          </h1>
          <p className="text-lg text-slate-200 leading-relaxed">
            AIML Data Scientist & full‑stack dev from Hyderabad, turning Deep Learning, NLP, and MERN skills into real products that actually ship.
          </p>
          <p className="text-md text-slate-300 italic">
            Highly motivated AIML engineer with hands‑on experience in proctoring systems, chatbots, and end‑to‑end web apps.
          </p>
          <div className="flex flex-wrap gap-4 text-md pt-4 justify-end">
            <span className="text-slate-300">📍 Hyderabad, India</span>
            <a href="tel:+919390995962" className="text-teal-300 hover:text-teal-200 hover:underline">
              +91 93909 95962
            </a>
            <a href="mailto:rezwanalishaik@gmail.com" className="text-teal-300 hover:text-teal-200 hover:underline">
              rezwanalishaik@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="text-teal-300 hover:text-teal-200 hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="text-teal-300 hover:text-teal-200 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      );
    case "openTab":
      return (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-200 uppercase tracking-wide">
            2025 · OpenTab · MERN Stack Developer Intern
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Building core architecture for a new web app with Next.js, React, Node.js, and MongoDB, focusing on clean, scalable foundations.
          </p>
        </div>
      );
    case "mhCognition":
      return (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-200 uppercase tracking-wide">
            Jan–May 2025 · MH Cognition · AIML Developer Intern
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Built YOLOv8 proctoring, NLP chatbots with Dialogflow, and deployed deep models via Django REST APIs for a production LMS platform.
          </p>
        </div>
      );
    case "projects":
      return (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-200 uppercase tracking-wide">
            Projects · CV, NLP, RL & Full‑Stack
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Drone scene recognition (ResNeXt50 + RF, 92%+), real‑time speech translation (Seq2Seq + attention), adaptive learning with RL, and a social media app wired for MLOps‑ready REST APIs.
          </p>
        </div>
      );
    case "education":
      return (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-200 uppercase tracking-wide">
            2021–2025 · B.Tech CSE (AIML) · Malla Reddy University
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            81%+, SIH finalist, Navnirman & Accenture challenges, Mr. University, Photography Club treasurer, and lead for multiple campus‑scale events.
          </p>
        </div>
      );
    case "cta":
      return (
        <div className="space-y-4">
          <p className="text-lg text-slate-300 leading-relaxed">
            Scroll ends here — next stop is a tiny but production‑style URL shortener.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-lg font-medium text-slate-950 shadow-md hover:bg-teal-400 hover:shadow-[0_0_20px_rgba(45,212,191,0.9)] active:scale-[0.98] transition-all"
          >
            Go to TinyLink app
          </Link>
        </div>
      );
    default:
      return null;
  }
}