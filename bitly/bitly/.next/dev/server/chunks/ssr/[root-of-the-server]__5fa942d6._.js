module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/bitly/bitly/src/app/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bitly/bitly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bitly/bitly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:4000");
function DashboardPage() {
    const [links, setLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingCreate, setLoadingCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [lastCreated, setLastCreated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showLastDropdown, setShowLastDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const shortUrlFor = (link)=>link ? `${API_BASE}/${link.code}` : "";
    const fetchLinks = async (opts = {})=>{
        try {
            setLoading(true);
            setError("");
            const params = new URLSearchParams();
            if (opts.search) {
                params.set("search", opts.search);
            }
            const res = await fetch(`${API_BASE}/api/links${params.toString() ? `?${params.toString()}` : ""}`);
            if (!res.ok) {
                throw new Error("Failed to load links");
            }
            const data = await res.json();
            setLinks(data);
        } catch (err) {
            console.error(err);
            setError(err.message || "Error loading links");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchLinks();
    }, []);
    const handleCreate = async (e)=>{
        e.preventDefault();
        setError("");
        setSuccess("");
        if (!url.trim()) {
            setError("URL is required");
            return;
        }
        try {
            setLoadingCreate(true);
            const res = await fetch(`${API_BASE}/api/links`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: url.trim(),
                    code: code.trim() || undefined
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Failed to create link");
                return;
            }
            setSuccess("Short link created");
            setUrl("");
            setCode("");
            setLastCreated(data);
            setShowLastDropdown(true);
            await fetchLinks({
                search
            });
        } catch (err) {
            console.error(err);
            setError("Error creating link");
        } finally{
            setLoadingCreate(false);
        }
    };
    const handleDelete = async (shortCode)=>{
        if (!window.confirm(`Delete link ${shortCode}?`)) return;
        setError("");
        setSuccess("");
        try {
            const res = await fetch(`${API_BASE}/api/links/${shortCode}`, {
                method: "DELETE"
            });
            if (!res.ok) {
                const data = await res.json().catch(()=>({}));
                setError(data.error || "Failed to delete link");
                return;
            }
            setSuccess("Link deleted");
            await fetchLinks({
                search
            });
        } catch (err) {
            console.error(err);
            setError("Error deleting link");
        }
    };
    const handleSearchSubmit = async (e)=>{
        e.preventDefault();
        await fetchLinks({
            search: search.trim()
        });
    };
    const hasLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>links && links.length > 0, [
        links
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-lg border border-slate-800 bg-slate-900/60 p-4 shadow-[0_0_25px_rgba(15,23,42,0.8)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold mb-3",
                        children: "Create short link"
                    }, void 0, false, {
                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleCreate,
                        className: "space-y-3 md:space-y-0 md:flex md:items-end md:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-slate-300 mb-1",
                                        children: "Target URL *"
                                    }, void 0, false, {
                                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "url",
                                        required: true,
                                        placeholder: "https://example.com/docs",
                                        value: url,
                                        onChange: (e)=>setUrl(e.target.value),
                                        className: "w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/70 focus:ring-offset-2 focus:ring-offset-slate-900 transition-shadow"
                                    }, void 0, false, {
                                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-48",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-slate-300 mb-1",
                                        children: "Custom code (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "docs01",
                                        value: code,
                                        onChange: (e)=>setCode(e.target.value),
                                        className: "w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/70 focus:ring-offset-2 focus:ring-offset-slate-900 transition-shadow"
                                    }, void 0, false, {
                                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[11px] text-slate-400",
                                        children: "6–8 chars, letters & digits."
                                    }, void 0, false, {
                                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loadingCreate,
                                className: "mt-2 inline-flex items-center justify-center rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-md hover:bg-teal-400 hover:shadow-[0_0_12px_rgba(45,212,191,0.7)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all",
                                children: loadingCreate ? "Creating..." : "Shorten"
                            }, void 0, false, {
                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    lastCreated && showLastDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-md border border-teal-600/70 bg-slate-950/80 px-3 py-2 text-sm shadow-[0_0_18px_rgba(45,212,191,0.4)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-teal-300 font-medium text-xs uppercase tracking-wide",
                                            children: "Latest short URL"
                                        }, void 0, false, {
                                            fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-slate-300",
                                            children: "Click to open or copy."
                                        }, void 0, false, {
                                            fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-wrap gap-2 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: shortUrlFor(lastCreated),
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "inline-flex items-center rounded bg-slate-900/90 px-2 py-1 text-xs hover:bg-slate-800 hover:shadow-[0_0_10px_rgba(148,163,184,0.6)] transition-all",
                                                    children: shortUrlFor(lastCreated)
                                                }, void 0, false, {
                                                    fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>navigator.clipboard.writeText(shortUrlFor(lastCreated)),
                                                    className: "inline-flex items-center rounded border border-slate-600 px-2 py-1 text-[11px] hover:bg-slate-800 hover:shadow-[0_0_10px_rgba(148,163,184,0.7)] active:scale-[0.97] transition-all",
                                                    children: "Copy"
                                                }, void 0, false, {
                                                    fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setShowLastDropdown(false),
                                    className: "text-xs text-slate-400 hover:text-slate-200 hover:scale-105 transition-transform",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bitly/bitly/src/app/app/page.js",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-1 text-sm",
                        children: [
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-400 bg-red-950/40 border border-red-800 rounded px-2 py-1",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-emerald-300 bg-emerald-950/40 border border-emerald-800 rounded px-2 py-1",
                                children: success
                            }, void 0, false, {
                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-lg border border-slate-800 bg-slate-900/60 p-4 shadow-[0_0_25px_rgba(15,23,42,0.8)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base font-semibold",
                                children: "All links"
                            }, void 0, false, {
                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSearchSubmit,
                                className: "flex w-full md:w-auto items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search by code or URL",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        className: "flex-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/70 focus:ring-offset-2 focus:ring-offset-slate-900 transition-shadow"
                                    }, void 0, false, {
                                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs font-medium hover:bg-slate-800 hover:shadow-[0_0_10px_rgba(148,163,184,0.7)] active:scale-[0.97] transition-all",
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-400",
                        children: "Loading links…"
                    }, void 0, false, {
                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    !loading && !hasLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-400",
                        children: "No links yet. Create your first short link above."
                    }, void 0, false, {
                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this),
                    !loading && hasLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full table-auto text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-slate-900/80 border-b border-slate-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-left font-medium",
                                                children: "Code"
                                            }, void 0, false, {
                                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                lineNumber: 269,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-left font-medium",
                                                children: "Target URL"
                                            }, void 0, false, {
                                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                lineNumber: 270,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-left font-medium",
                                                children: "Total clicks"
                                            }, void 0, false, {
                                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-left font-medium",
                                                children: "Last clicked"
                                            }, void 0, false, {
                                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                lineNumber: 276,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-left font-medium",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-slate-800/60 hover:bg-slate-900/80 hover:shadow-[0_0_12px_rgba(148,163,184,0.4)] transition-shadow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2 align-top",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `/code/${link.code}`,
                                                        className: "text-teal-300 hover:underline hover:text-teal-200",
                                                        children: link.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                        lineNumber: 289,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                    lineNumber: 288,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2 max-w-xs align-top",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "truncate",
                                                                title: link.target_url,
                                                                children: link.target_url
                                                            }, void 0, false, {
                                                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                                lineNumber: 298,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>navigator.clipboard.writeText(shortUrlFor(link)),
                                                                className: "rounded border border-slate-700 px-2 py-0.5 text-[11px] hover:bg-slate-800 hover:shadow-[0_0_10px_rgba(148,163,184,0.7)] active:scale-[0.97] transition-all",
                                                                children: "Copy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                                lineNumber: 301,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                        lineNumber: 297,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                    lineNumber: 296,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2 align-top",
                                                    children: link.total_clicks
                                                }, void 0, false, {
                                                    fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                    lineNumber: 312,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2 align-top text-xs text-slate-400",
                                                    children: link.last_clicked_at ? new Date(link.last_clicked_at).toLocaleString() : "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                    lineNumber: 315,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2 align-top space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: shortUrlFor(link),
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "text-xs text-teal-300 hover:text-teal-200 hover:underline",
                                                            children: "Open"
                                                        }, void 0, false, {
                                                            fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                            lineNumber: 321,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bitly$2f$bitly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleDelete(link.code),
                                                            className: "text-xs text-red-300 hover:text-red-200 hover:underline active:scale-[0.97] transition-transform",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                            lineNumber: 329,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                                    lineNumber: 320,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, link.code, true, {
                                            fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/bitly/bitly/src/app/app/page.js",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bitly/bitly/src/app/app/page.js",
                            lineNumber: 266,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bitly/bitly/src/app/app/page.js",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bitly/bitly/src/app/app/page.js",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bitly/bitly/src/app/app/page.js",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
}),
"[project]/bitly/bitly/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/bitly/bitly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/bitly/bitly/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/bitly/bitly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/bitly/bitly/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5fa942d6._.js.map