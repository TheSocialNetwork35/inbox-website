"use client";

import { useMemo, useState } from "react";

const schools = [
  ["KEN", "Kantonsschule Enge", "Zürich"],
  ["KKN", "Kantonsschule Küsnacht", "Küsnacht"],
  ["KUE", "Kantonsschule Uetikon am See", "Uetikon"],
  ["KST", "Kantonsschule Stadelhofen", "Zürich"],
  ["KSH", "Kantonsschule Hohe Promenade", "Zürich"],
];

export function SchoolDirectory() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("de-CH");
    if (!needle) return schools;
    return schools.filter((school) =>
      school.some((value) => value.toLocaleLowerCase("de-CH").includes(needle)),
    );
  }, [query]);

  return (
    <>
      <label className="school-search">
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Schule suchen"
          placeholder="Schule oder Ort suchen …"
        />
        {query && (
          <button type="button" onClick={() => setQuery("")} aria-label="Suche löschen">
            ×
          </button>
        )}
      </label>
      <div className="school-list" aria-live="polite">
        {filtered.map(([code, name, place]) => (
          <article key={code}>
            <span>{code}</span>
            <div><h3>{name}</h3><p>{place}</p></div>
            <b>Unterstützt</b>
            <i>✓</i>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="school-empty">
            <b>Keine Schule gefunden.</b>
            <span>Schick uns deinen Schulwunsch – wir prüfen die Integration.</span>
            <a href="/kontakt?thema=Schule%20vorschlagen">
              Schule vorschlagen →
            </a>
          </div>
        )}
      </div>
    </>
  );
}
