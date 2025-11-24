// app/layout.js
import "./globals.css";

export const metadata = {
  title: "TinyLink",
  description: "Tiny URL shortener and dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
          <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold tracking-tight">TinyLink</h1>
            <nav className="text-sm space-x-4">
              <a href="/" className="hover:text-teal-300">
                About
              </a>
              <a href="/app" className="hover:text-teal-300">
                Dashboard
              </a>
            </nav>
          </div>
        </header>
        {/*
          CHANGE MADE HERE:
          Removed 'mx-auto max-w-4xl' to allow content to span the full width.
          'px-4 py-6' can be kept, but the HomePage component handles its own padding.
        */}
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}