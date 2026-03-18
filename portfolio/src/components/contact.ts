import { socialLinks } from "../data/about";

// SVG icons for contact links
const mailIcon = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
`;

const githubIcon = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
`;

const linkedinIcon = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
`;

// Kontaktsektionen med länkar till e-post, GitHub och LinkedIn
export function contact(): string {
  return `
    <section id="kontakt" class="contact fade-in">
      <h2 class="section-title">Låt oss prata</h2>
      <p class="contact-desc">Jag söker LIA-plats från hösten 2026.<br>
      <br>Period:
      <br>2026-09-21 till 2027-03-12.<br>
      <br>Hör gärna av dig!</p>
      <div class="contact-links">
        <a href="mailto:${socialLinks.email}">${mailIcon} E-post</a>
        <a href="${socialLinks.github}" target="_blank" rel="noopener noreferrer">${githubIcon} GitHub</a>
        <a href="${socialLinks.linkedin}" target="_blank" rel="noopener noreferrer">${linkedinIcon} LinkedIn</a>
      </div>
    </section>
  `;
}