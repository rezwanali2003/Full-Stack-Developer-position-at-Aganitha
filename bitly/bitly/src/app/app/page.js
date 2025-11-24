"use client";

import { useEffect, useMemo, useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function DashboardPage() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [search, setSearch] = useState("");

  const [lastCreated, setLastCreated] = useState(null);
  const [showLastDropdown, setShowLastDropdown] = useState(false);

  const shortUrlFor = (link) =>
    link ? `${API_BASE}/${link.code}` : "";

  const fetchLinks = async (opts = {}) => {
    try {
      setLoading(true);
      setError("");
      const params = new URLSearchParams();
      if (opts.search) {
        params.set("search", opts.search);
      }
      const res = await fetch(
        `${API_BASE}/api/links${params.toString() ? `?${params.toString()}` : ""}`,
      );
      if (!res.ok) {
        throw new Error("Failed to load links");
      }
      const data = await res.json();
      setLinks(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Error loading links");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const handleCreate = async (e) => {
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url.trim(),
          code: code.trim() || undefined,
        }),
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
      await fetchLinks({ search });
    } catch (err) {
      console.error(err);
      setError("Error creating link");
    } finally {
      setLoadingCreate(false);
    }
  };

  const handleDelete = async (shortCode) => {
    if (!window.confirm(`Delete link ${shortCode}?`)) return;
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${API_BASE}/api/links/${shortCode}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Failed to delete link");
        return;
      }

      setSuccess("Link deleted");
      await fetchLinks({ search });
    } catch (err) {
      console.error(err);
      setError("Error deleting link");
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    await fetchLinks({ search: search.trim() });
  };

  const hasLinks = useMemo(() => links && links.length > 0, [links]);

  return (
    <div className="space-y-6">
      {/* Create form */}
      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 shadow-[0_0_25px_rgba(15,23,42,0.8)]">
        <h2 className="text-base font-semibold mb-3">Create short link</h2>
        <form
          onSubmit={handleCreate}
          className="space-y-3 md:space-y-0 md:flex md:items-end md:gap-3"
        >
          <div className="flex-1">
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Target URL *
            </label>
            <input
              type="url"
              required
              placeholder="https://example.com/docs"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/70 focus:ring-offset-2 focus:ring-offset-slate-900 transition-shadow"
            />
          </div>
          <div className="w-full md:w-48">
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Custom code (optional)
            </label>
            <input
              type="text"
              placeholder="docs01"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/70 focus:ring-offset-2 focus:ring-offset-slate-900 transition-shadow"
            />
            <p className="mt-1 text-[11px] text-slate-400">
              6–8 chars, letters & digits.
            </p>
          </div>
          <button
            type="submit"
            disabled={loadingCreate}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-md hover:bg-teal-400 hover:shadow-[0_0_12px_rgba(45,212,191,0.7)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
          >
            {loadingCreate ? "Creating..." : "Shorten"}
          </button>
        </form>

        {/* Latest created short URL dropdown */}
        {lastCreated && showLastDropdown && (
          <div className="mt-4 rounded-md border border-teal-600/70 bg-slate-950/80 px-3 py-2 text-sm shadow-[0_0_18px_rgba(45,212,191,0.4)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-teal-300 font-medium text-xs uppercase tracking-wide">
                  Latest short URL
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Click to open or copy.
                </p>
                <div className="mt-2 flex flex-wrap gap-2 items-center">
                  <a
                    href={shortUrlFor(lastCreated)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded bg-slate-900/90 px-2 py-1 text-xs hover:bg-slate-800 hover:shadow-[0_0_10px_rgba(148,163,184,0.6)] transition-all"
                  >
                    {shortUrlFor(lastCreated)}
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      navigator.clipboard.writeText(shortUrlFor(lastCreated))
                    }
                    className="inline-flex items-center rounded border border-slate-600 px-2 py-1 text-[11px] hover:bg-slate-800 hover:shadow-[0_0_10px_rgba(148,163,184,0.7)] active:scale-[0.97] transition-all"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowLastDropdown(false)}
                className="text-xs text-slate-400 hover:text-slate-200 hover:scale-105 transition-transform"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="mt-3 space-y-1 text-sm">
          {error && (
            <p className="text-red-400 bg-red-950/40 border border-red-800 rounded px-2 py-1">
              {error}
            </p>
          )}
          {success && (
            <p className="text-emerald-300 bg-emerald-950/40 border border-emerald-800 rounded px-2 py-1">
              {success}
            </p>
          )}
        </div>
      </section>

      {/* Search + table */}
      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 shadow-[0_0_25px_rgba(15,23,42,0.8)]">
        <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h2 className="text-base font-semibold">All links</h2>
          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full md:w-auto items-center gap-2"
          >
            <input
              type="text"
              placeholder="Search by code or URL"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/70 focus:ring-offset-2 focus:ring-offset-slate-900 transition-shadow"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs font-medium hover:bg-slate-800 hover:shadow-[0_0_10px_rgba(148,163,184,0.7)] active:scale-[0.97] transition-all"
            >
              Search
            </button>
          </form>
        </div>

        {loading && (
          <p className="text-sm text-slate-400">Loading links…</p>
        )}

        {!loading && !hasLinks && (
          <p className="text-sm text-slate-400">
            No links yet. Create your first short link above.
          </p>
        )}

        {!loading && hasLinks && (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-slate-900/80 border-b border-slate-800">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">Code</th>
                  <th className="px-3 py-2 text-left font-medium">
                    Target URL
                  </th>
                  <th className="px-3 py-2 text-left font-medium">
                    Total clicks
                  </th>
                  <th className="px-3 py-2 text-left font-medium">
                    Last clicked
                  </th>
                  <th className="px-3 py-2 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link) => (
                  <tr
                    key={link.code}
                    className="border-b border-slate-800/60 hover:bg-slate-900/80 hover:shadow-[0_0_12px_rgba(148,163,184,0.4)] transition-shadow"
                  >
                    <td className="px-3 py-2 align-top">
                      <a
                        href={`/code/${link.code}`}
                        className="text-teal-300 hover:underline hover:text-teal-200"
                      >
                        {link.code}
                      </a>
                    </td>
                    <td className="px-3 py-2 max-w-xs align-top">
                      <div className="flex items-center gap-2">
                        <span className="truncate" title={link.target_url}>
                          {link.target_url}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            navigator.clipboard.writeText(shortUrlFor(link))
                          }
                          className="rounded border border-slate-700 px-2 py-0.5 text-[11px] hover:bg-slate-800 hover:shadow-[0_0_10px_rgba(148,163,184,0.7)] active:scale-[0.97] transition-all"
                        >
                          Copy
                        </button>
                      </div>
                    </td>
                    <td className="px-3 py-2 align-top">
                      {link.total_clicks}
                    </td>
                    <td className="px-3 py-2 align-top text-xs text-slate-400">
                      {link.last_clicked_at
                        ? new Date(link.last_clicked_at).toLocaleString()
                        : "—"}
                    </td>
                    <td className="px-3 py-2 align-top space-x-2">
                      <a
                        href={shortUrlFor(link)}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-teal-300 hover:text-teal-200 hover:underline"
                      >
                        Open
                      </a>
                      <button
                        type="button"
                        onClick={() => handleDelete(link.code)}
                        className="text-xs text-red-300 hover:text-red-200 hover:underline active:scale-[0.97] transition-transform"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
