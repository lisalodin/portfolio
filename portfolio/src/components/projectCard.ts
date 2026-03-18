import type { Project } from "../data/projects";

// Ikoner som SVG-strängar för att undvika beroenden på externa bibliotek och hålla komponenten enkel.
const githubIcon = `
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
`;

const externalIcon = `
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
`;

// Genererar HTML för ett projektkort baserat på projektdata. Inkluderar ikoner och länkar.
export function projectCard(project: Project): string {
  const tags = project.tags
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  const liveLink = project.live
    ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer">${externalIcon} Live</a>`
    : "";

  return `
    <article class="project-card">
      <span class="project-number">${String(project.id).padStart(2, "0")}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">${tags}</div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer">${githubIcon} GitHub</a>
        ${liveLink}
      </div>
    </article>
  `;
}