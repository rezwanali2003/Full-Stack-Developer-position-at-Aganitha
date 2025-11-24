import "../../globals.css";

import { headers } from 'next/headers';
 // Import headers to get the current path

export const metadata = {
  title: "Shaik Rezwan Ali | AIML & Full-Stack",
  description: "Portfolio of Shaik Rezwan Ali: AIML Data Scientist & MERN Stack Developer.",
};

export default function RootLayout({ children }) {
  // Get the current path (pathname)
  const headersList = headers();
  const pathname = headersList.get('x-next-pathname') || '/';

  // Check if the current path is the root (homepage)
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-100">
        
        {/*
          CONDITIONAL HEADER: Only render the header if it's NOT the homepage (the timeline)
        */}
        {!isHomePage && (
          <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-20">
            <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
              <h1 className="text-lg font-semibold tracking-tight text-teal-400">TinyLink</h1>
              <nav className="text-sm space-x-4">
                {/* Updated link text to reflect the dashboard context */}
                <a href="/app" className="hover:text-teal-300 transition-colors">
                  Dashboard
                </a>
              </nav>
            </div>
          </header>
        )}
        
        {/* CONDITIONAL MAIN: The container class changes based on the page type.
          - Homepage (Timeline): No max-width, full content width is needed for the staggered layout.
          - Other pages (Dashboard): Apply the max-width and padding.
        */}
        <main className={isHomePage ? "" : "mx-auto max-w-4xl px-4 py-6"}>
          {children}
        </main>
        
      </body>
    </html>
  );
}