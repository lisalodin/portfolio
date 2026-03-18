import { aboutText, details } from "../data/about";

export function about(): string {
  const paragraphs = aboutText
    .map((text) => `<p>${text}</p>`)
    .join("");

  const detailItems = details
    .map(
      (d) => `
      <div class="detail-item">
        <span class="detail-label">${d.label}</span>
        <span class="detail-value">${d.value}</span>
      </div>
    `
    )
    .join("");

  return `
    <section id="om" class="about fade-in">
      <p class="section-label">01 — Om mig</p>
      <h2 class="section-title">Hej, jag heter Lisa</h2>
      <div class="about-grid">
        <div class="about-text">
          ${paragraphs}
        </div>
        <div class="about-details">
          ${detailItems}
        </div>
      </div>
    </section>
  `;
}