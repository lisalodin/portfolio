import { projectsData } from "../data/projects";
import { projectCard } from "./projectCard";

// Genererar HTML för projektsektionen genom att mappa över projekten och skapa kort för varje projekt.
export function projects(): string {
  const cards = projectsData
    .map((project) => projectCard(project))
    .join("");

  return `
    <section id="projekt" class="projects fade-in">
      <p class="section-label">02 — Projekt</p>
      <h2 class="section-title">Utvalda projekt</h2>
      <div class="projects-grid">
        ${cards}
      </div>
    </section>
  `;
}