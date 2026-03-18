import { skillsData } from "../data/skills";

export function skills(): string {
  const groups = skillsData
    .map(
      (group) => `
      <div class="skill-group">
        <h3>${group.category}</h3>
        <ul>
          ${group.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `
    )
    .join("");

  return `
    <section id="skills" class="skills fade-in">
      <p class="section-label">03 — Tekniker</p>
      <h2 class="section-title">Min verktygslåda</h2>
      <div class="skills-layout">
        ${groups}
      </div>
    </section>
  `;
}