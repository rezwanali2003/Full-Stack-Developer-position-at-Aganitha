module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/bitly/bitly/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bitly/bitly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bitly/bitly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bitly/bitly/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// FIX: Removed the duplicate 'education' entry. The CTA is handled separately below.
const SECTIONS = [
    "about",
    "openTab",
    "mhCognition",
    "projects",
    "education",
    "skills"
];
function HomePage() {
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dotY, setDotY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        SECTIONS.forEach((sectionId)=>{
            sectionRefs.current[sectionId] = document.getElementById(sectionId);
        });
        const calculateDotY = (activeSectionEl)=>{
            if (!trackRef.current || !activeSectionEl) return 0;
            const trackRect = trackRef.current.getBoundingClientRect();
            const sectionRect = activeSectionEl.getBoundingClientRect();
            const rect = activeSectionEl.getBoundingClientRect();
            const sectionCenterY = sectionRect.top + rect.height / 2 + window.scrollY;
            // Adjusted for padding/offset to find the track's absolute top
            const trackTopAbsolute = trackRect.top + window.scrollY - 80;
            return sectionCenterY - trackTopAbsolute;
        };
        const handleScroll = ()=>{
            if (!trackRef.current) return;
            let currentActiveIndex = 0;
            let minDistance = Infinity;
            let activeSectionEl = null;
            SECTIONS.forEach((sectionId, index)=>{
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
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const renderSectionContent = (sectionId, index, isActive)=>{
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
        switch(sectionId){
            case "about":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${contentBoxStyle} space-y-4 ${textClass} ${contentPaddingClass}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: `text-4xl font-extrabold tracking-tight ${highlightColor}`,
                            children: "Shaik Rezwan Ali"
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-lg ${primaryTextColor} leading-relaxed`,
                            children: "Entry-Level AIML Scientist with a strong foundation in Deep Learning, NLP, and Computer Vision. Eager to design, develop, and deploy scalable AI/ML models to solve complex, real-world challenges."
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-md ${secondaryTextColor} italic`,
                            children: "Highly motivated engineering graduate with hands‑on project experience in proctoring systems, chatbots, and MERN/Django full-stack development. Ready to contribute immediately."
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-wrap gap-4 text-md pt-4 ${flexJustify}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: secondaryTextColor,
                                    children: "📍 Hyderabad, India"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+919390995962",
                                    className: `${secondaryHighlightColor} hover:text-teal-200 hover:underline`,
                                    children: "+91 93909 95962"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:rezwanalishaik@gmail.com",
                                    className: `${secondaryHighlightColor} hover:text-teal-200 hover:underline`,
                                    children: "rezwanalishaik@gmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.linkedin.com/in/your-linkedin",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: `${secondaryHighlightColor} hover:text-teal-200 hover:underline`,
                                    children: "LinkedIn"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/your-github",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: `${secondaryHighlightColor} hover:text-teal-200 hover:underline`,
                                    children: "GitHub"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bitly/bitly/src/app/page.js",
                    lineNumber: 93,
                    columnNumber: 11
                }, this);
            case "openTab":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${contentBoxStyle} space-y-3 ${textClass} ${contentPaddingClass}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-xl font-semibold ${primaryTextColor} uppercase tracking-wide`,
                            children: "Nov 2025–Present · OpenTab · MERN Stack Developer Intern"
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-lg ${secondaryTextColor} leading-relaxed`,
                            children: "Contributing to the foundation and core architecture of a new web application using Next.js, React, Node.js, and MongoDB, establishing a scalable and reliable project base."
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bitly/bitly/src/app/page.js",
                    lineNumber: 114,
                    columnNumber: 11
                }, this);
            case "mhCognition":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${contentBoxStyle} space-y-3 ${textClass} ${contentPaddingClass}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-xl font-semibold ${primaryTextColor} uppercase tracking-wide`,
                            children: "Jan–May 2025 · MH Cognition · AIML Developer Intern"
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: `text-lg ${secondaryTextColor} leading-relaxed space-y-2 list-disc list-inside`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Designed and optimized Computer Vision models (YOLOv8) for exam proctoring, achieving 80% higher detection accuracy and delivering significant business impact."
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Developed NLP conversational AI chatbots using Dialogflow, resulting in a 25% enhancement in user engagement."
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Implemented and integrated Deep Learning models into production backend systems using Python, Django, and REST APIs."
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bitly/bitly/src/app/page.js",
                    lineNumber: 125,
                    columnNumber: 11
                }, this);
            case "projects":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${contentBoxStyle} space-y-3 ${textClass} ${contentPaddingClass}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-xl font-semibold ${highlightColor} uppercase tracking-wide`,
                            children: "Key Academic & Personal Projects: CV, NLP, RL & Full‑Stack Applications"
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: `text-lg ${secondaryTextColor} leading-relaxed space-y-3 list-disc list-inside`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Drone Scene Recognition: Applied ResNeXt50 + Random Forest (Transfer Learning) achieving 92%+ accuracy, improving model performance by 6% over baseline."
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Real-Time Translation: Designed AI-powered speech translation using Seq2Seq with attention and Reinforcement Learning to enhance accuracy by 15%."
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 144,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Adaptive Learning Model: Developed an AI system using SVM to classify learning styles and Reinforcement Learning for optimized path generation."
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Social Media App: Engineered a scalable full-stack platform using Django, REST APIs, and React Native demonstrating modern system design principles."
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bitly/bitly/src/app/page.js",
                    lineNumber: 138,
                    columnNumber: 11
                }, this);
            case "education":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${contentBoxStyle} space-y-3 ${textClass} ${contentPaddingClass}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-xl font-semibold ${primaryTextColor} uppercase tracking-wide`,
                            children: "2021–2025 · B.Tech CSE (AIML) · Malla Reddy University"
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-lg ${secondaryTextColor} leading-relaxed`,
                            children: "Graduating with 81.32% GPA. Notable achievements include being an SIH finalist, performing well in Navnirman & Accenture challenges, and holding leadership roles (e.g., Photography Club Treasurer)."
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bitly/bitly/src/app/page.js",
                    lineNumber: 152,
                    columnNumber: 11
                }, this);
            case "skills":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${contentBoxStyle} space-y-3 ${textClass} ${contentPaddingClass}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-xl font-semibold ${primaryTextColor} uppercase tracking-wide`,
                            children: "Core Technical Skills & Frameworks"
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 164,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `grid grid-cols-2 md:grid-cols-3 gap-y-2 text-md ${secondaryTextColor}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "🔥 **AI/ML:** TensorFlow, PyTorch, scikit-learn, Keras"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 168,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "💻 **Languages:** Python (Advanced), JavaScript, SQL"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 169,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "🌐 **Web/Full Stack:** Django, Next.js, React.js, REST APIs"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 170,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "🧠 **Domains:** Deep Learning, NLP, Computer Vision, RL"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 171,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "🛠️ **Tools:** Pandas, NumPy, Jupyter, Git / GitHub"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 172,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "☁️ **Concepts:** MLOps Readiness, System Design"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 173,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 167,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm italic text-slate-400",
                            children: "Certifications from IBM Coursera, HackerRank, and Infosys."
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 175,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bitly/bitly/src/app/page.js",
                    lineNumber: 163,
                    columnNumber: 13
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-10 bg-slate-950 text-slate-100 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto px-4",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: trackRef,
                        className: "absolute left-1/2 -translate-x-1/2 w-px bg-slate-700 top-20 bottom-20 z-0"
                    }, void 0, false, {
                        fileName: "[project]/bitly/bitly/src/app/page.js",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-teal-500 shadow-[0_0_35px_rgba(45,212,191,0.9)] transition-all duration-300 ease-in-out flex items-center justify-center border-2 border-teal-300 z-10",
                        style: {
                            top: `${dotY}px`,
                            transform: "translateY(-50%)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 w-3 rounded-full bg-teal-100 opacity-70"
                        }, void 0, false, {
                            fileName: "[project]/bitly/bitly/src/app/page.js",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bitly/bitly/src/app/page.js",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-24 pt-20 pb-20 relative z-10",
                        children: SECTIONS.map((sectionId, index)=>{
                            const isLeft = index % 2 === 0;
                            const isActive = activeIndex === index;
                            // Removed extraClass logic as CTA is moved
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: sectionId,
                                className: `min-h-[60vh] flex ${isLeft ? "justify-start" : "justify-end"} items-center transition-all duration-500 ease-in-out ${isActive ? "opacity-100 scale-100" : "opacity-30 scale-98"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-xl w-full",
                                    children: renderSectionContent(sectionId, index, isActive)
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/page.js",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this)
                            }, sectionId, false, {
                                fileName: "[project]/bitly/bitly/src/app/page.js",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/bitly/bitly/src/app/page.js",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bitly/bitly/src/app/page.js",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-16 pt-8 pb-16 text-center border-t border-slate-700/80 max-w-7xl mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-slate-300 leading-relaxed mb-6",
                        children: "Scroll ends here — next stop is a tiny but production‑style URL shortener."
                    }, void 0, false, {
                        fileName: "[project]/bitly/bitly/src/app/page.js",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/app",
                        className: "inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-lg font-medium text-slate-950 shadow-md hover:bg-teal-400 hover:shadow-[0_0_20px_rgba(45,212,191,0.9)] active:scale-[0.98] transition-all",
                        children: "Go to TinyLink app"
                    }, void 0, false, {
                        fileName: "[project]/bitly/bitly/src/app/page.js",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bitly/bitly/src/app/page.js",
                lineNumber: 225,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bitly/bitly/src/app/page.js",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1c38ec47._.js.map