"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// FIX: Removed the duplicate 'education' entry. The CTA is handled separately below.
const SECTIONS = ["about", "openTab", "mhCognition", "projects", "education", "skills"];

export default function HomePage() {
  const trackRef = useRef(null);
  const sectionRefs = useRef({}); 
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotY, setDotY] = useState(0); 

  useEffect(() => {
    SECTIONS.forEach((sectionId) => {
      sectionRefs.current[sectionId] = document.getElementById(sectionId);
    });

    const calculateDotY = (activeSectionEl) => {
      if (!trackRef.current || !activeSectionEl) return 0;

      const trackRect = trackRef.current.getBoundingClientRect();
      const sectionRect = activeSectionEl.getBoundingClientRect();
      const rect = activeSectionEl.getBoundingClientRect();
      
      const sectionCenterY = sectionRect.top + rect.height / 2 + window.scrollY;

      // Adjusted for padding/offset to find the track's absolute top
      const trackTopAbsolute = trackRect.top + window.scrollY - 80; 

      return sectionCenterY - trackTopAbsolute;
    };

    const handleScroll = () => {
      if (!trackRef.current) return;
      
      let currentActiveIndex = 0;
      let minDistance = Infinity; 
      let activeSectionEl = null; 

      SECTIONS.forEach((sectionId, index) => {
        const sectionEl = sectionRefs.current[sectionId];
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          const viewportCenter = window.innerHeight / 2;
          const sectionCenter = rect.top + rect.height / 2;
          const distanceToCenter = Math.abs(viewportCenter - sectionCenter);

          if (distanceToCenter < minDistance) {
            minDistance = distanceToCenter;
            currentActiveIndex = index;
            activeSectionEl = sectionEl; 
          }
        }
      });

      setActiveIndex(currentActiveIndex);
      
      if (activeSectionEl) {
        const newDotY = calculateDotY(activeSectionEl);
        setDotY(newDotY);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const renderSectionContent = (sectionId, index, isActive) => {
    const isLeft = index % 2 === 0;
    const textClass = isLeft ? "text-left" : "text-right";
    const flexJustify = isLeft ? "justify-start" : "justify-end";

    // MODIFIED: Increased left padding on the right side (pl-20) and reduced right padding on the left side (pr-10) 
    // to push left components further to the edge of their max-w-xl container.
    const contentPaddingClass = isLeft ? "pr-10 md:pr-10" : "pl-10 md:pl-20";

    // Color Palette: High-contrast black/slate and teal accent
    const primaryTextColor = "text-slate-100";
    const secondaryTextColor = "text-slate-300";
    const highlightColor = "text-teal-400";
    const secondaryHighlightColor = "text-teal-300";

    // NEW UI: Added classes for borders and background 
    // Border is added to the wrapping div in the return function below.
    const contentBoxStyle = "p-6 rounded-lg bg-slate-800/20 shadow-lg border border-slate-700/50";


    switch (sectionId) {
      case "about":
        return (
          <div className={`${contentBoxStyle} space-y-4 ${textClass} ${contentPaddingClass}`}>
            <h1 className={`text-4xl font-extrabold tracking-tight ${highlightColor}`}>
              Shaik Rezwan Ali
            </h1>
            <p className={`text-lg ${primaryTextColor} leading-relaxed`}>
              Entry-Level AIML Scientist with a strong foundation in Deep Learning, NLP, and Computer Vision. Eager to design, develop, and deploy scalable AI/ML models to solve complex, real-world challenges.
            </p>
            <p className={`text-md ${secondaryTextColor} italic`}>
              Highly motivated engineering graduate with hands‑on project experience in proctoring systems, chatbots, and MERN/Django full-stack development. Ready to contribute immediately.
            </p>
            <div className={`flex flex-wrap gap-4 text-md pt-4 ${flexJustify}`}>
              <span className={secondaryTextColor}>📍 Hyderabad, India</span>
              <a href="tel:+919390995962" className={`${secondaryHighlightColor} hover:text-teal-200 hover:underline`}>+91 93909 95962</a>
              <a href="mailto:rezwanalishaik@gmail.com" className={`${secondaryHighlightColor} hover:text-teal-200 hover:underline`}>rezwanalishaik@gmail.com</a>
              <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className={`${secondaryHighlightColor} hover:text-teal-200 hover:underline`}>LinkedIn</a>
              <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className={`${secondaryHighlightColor} hover:text-teal-200 hover:underline`}>GitHub</a>
            </div>
          </div>
        );
      case "openTab":
        return (
          <div className={`${contentBoxStyle} space-y-3 ${textClass} ${contentPaddingClass}`}>
            <h2 className={`text-xl font-semibold ${primaryTextColor} uppercase tracking-wide`}>
              Nov 2025–Present · OpenTab · MERN Stack Developer Intern
            </h2>
            <p className={`text-lg ${secondaryTextColor} leading-relaxed`}>
              Contributing to the foundation and core architecture of a new web application using Next.js, React, Node.js, and MongoDB, establishing a scalable and reliable project base.
            </p>
          </div>
        );
      case "mhCognition":
        return (
          <div className={`${contentBoxStyle} space-y-3 ${textClass} ${contentPaddingClass}`}>
            <h2 className={`text-xl font-semibold ${primaryTextColor} uppercase tracking-wide`}>
              Jan–May 2025 · MH Cognition · AIML Developer Intern
            </h2>
            <ul className={`text-lg ${secondaryTextColor} leading-relaxed space-y-2 list-disc list-inside`}>
                <li>Designed and optimized Computer Vision models (YOLOv8) for exam proctoring, achieving 80% higher detection accuracy and delivering significant business impact.</li>
                <li>Developed NLP conversational AI chatbots using Dialogflow, resulting in a 25% enhancement in user engagement.</li>
                <li>Implemented and integrated Deep Learning models into production backend systems using Python, Django, and REST APIs.</li>
            </ul>
          </div>
        );
      case "projects":
        return (
          <div className={`${contentBoxStyle} space-y-3 ${textClass} ${contentPaddingClass}`}>
            <h2 className={`text-xl font-semibold ${highlightColor} uppercase tracking-wide`}>
              Key Academic & Personal Projects: CV, NLP, RL & Full‑Stack Applications
            </h2>
            <ul className={`text-lg ${secondaryTextColor} leading-relaxed space-y-3 list-disc list-inside`}>
                <li>Drone Scene Recognition: Applied ResNeXt50 + Random Forest (Transfer Learning) achieving 92%+ accuracy, improving model performance by 6% over baseline.</li>
                <li>Real-Time Translation: Designed AI-powered speech translation using Seq2Seq with attention and Reinforcement Learning to enhance accuracy by 15%.</li>
                <li>Adaptive Learning Model: Developed an AI system using SVM to classify learning styles and Reinforcement Learning for optimized path generation.</li>
                <li>Social Media App: Engineered a scalable full-stack platform using Django, REST APIs, and React Native demonstrating modern system design principles.</li>
            </ul>
          </div>
        );
      case "education":
        return (
          <div className={`${contentBoxStyle} space-y-3 ${textClass} ${contentPaddingClass}`}>
            <h2 className={`text-xl font-semibold ${primaryTextColor} uppercase tracking-wide`}>
              2021–2025 · B.Tech CSE (AIML) · Malla Reddy University
            </h2>
            <p className={`text-lg ${secondaryTextColor} leading-relaxed`}>
              Graduating with 81.32% GPA. Notable achievements include being an SIH finalist, performing well in Navnirman & Accenture challenges, and holding leadership roles (e.g., Photography Club Treasurer).
            </p>
          </div>
        );
      case "skills":
        return (
            <div className={`${contentBoxStyle} space-y-3 ${textClass} ${contentPaddingClass}`}>
                <h2 className={`text-xl font-semibold ${primaryTextColor} uppercase tracking-wide`}>
                    Core Technical Skills & Frameworks
                </h2>
                <div className={`grid grid-cols-2 md:grid-cols-3 gap-y-2 text-md ${secondaryTextColor}`}>
                    <p>🔥 **AI/ML:** TensorFlow, PyTorch, scikit-learn, Keras</p>
                    <p>💻 **Languages:** Python (Advanced), JavaScript, SQL</p>
                    <p>🌐 **Web/Full Stack:** Django, Next.js, React.js, REST APIs</p>
                    <p>🧠 **Domains:** Deep Learning, NLP, Computer Vision, RL</p>
                    <p>🛠️ **Tools:** Pandas, NumPy, Jupyter, Git / GitHub</p>
                    <p>☁️ **Concepts:** MLOps Readiness, System Design</p>
                </div>
                <p className="text-sm italic text-slate-400">Certifications from IBM Coursera, HackerRank, and Infosys.</p>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-10 bg-slate-950 text-slate-100 relative">
      <div className="relative max-w-7xl mx-auto px-4"> {/* CHANGED max-w-6xl to max-w-7xl */}
        {/* Central track line */}
        <div
          ref={trackRef}
          className="absolute left-1/2 -translate-x-1/2 w-px bg-slate-700 top-20 bottom-20 z-0"
        />
        {/* Moving circle */}
        <div
          className="absolute left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-teal-500 shadow-[0_0_35px_rgba(45,212,191,0.9)] transition-all duration-300 ease-in-out flex items-center justify-center border-2 border-teal-300 z-10"
          style={{ top: `${dotY}px`, transform: "translateY(-50%)" }}
        >
          {/* Optional: Add a small inner dot for more styling */}
          <div className="h-3 w-3 rounded-full bg-teal-100 opacity-70"></div>
        </div>
        {/* Sections content with alternating alignment */}
        <div className="space-y-24 pt-20 pb-20 relative z-10">
          {SECTIONS.map((sectionId, index) => {
            const isLeft = index % 2 === 0;
            const isActive = activeIndex === index;
            // Removed extraClass logic as CTA is moved
            return (
              <section
                key={sectionId}
                id={sectionId}
                className={`min-h-[60vh] flex ${isLeft ? "justify-start" : "justify-end"} items-center transition-all duration-500 ease-in-out ${
                  isActive ? "opacity-100 scale-100" : "opacity-30 scale-98"
                }`}
              >
                {/* Content Box with max-w-xl */}
                {/* Note: The visual border and padding are now defined inside renderSectionContent for the content div */}
                <div className="max-w-xl w-full">
                  {renderSectionContent(sectionId, index, isActive)}
                </div>
              </section>
            );
          })}
        </div>
      </div>
      
      {/* ⭐ STANDALONE CTA SECTION AFTER THE TIMELINE */}
      <div className="mt-16 pt-8 pb-16 text-center border-t border-slate-700/80 max-w-7xl mx-auto px-4">
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          Scroll ends here — next stop is a tiny but production‑style URL shortener.
        </p>
        <Link
          href="/app"
          className="inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-lg font-medium text-slate-950 shadow-md hover:bg-teal-400 hover:shadow-[0_0_20px_rgba(45,212,191,0.9)] active:scale-[0.98] transition-all"
        >
          Go to TinyLink app
        </Link>
      </div>
    </div>
  );
}