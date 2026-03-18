import { aboutText, details } from "../data/about";

// Funktion som genererar HTML för "Om mig"-sektionen baserat på data från aboutText och details.
export function about(): string {
  const paragraphs = aboutText
    .map((text) => `<p>${text}</p>`)
    .join("");

  // Genererar HTML för varje detalj i details-arrayen.
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
    
// Returnerar den kompletta HTML-strukturen för "Om mig"-sektionen.
  return `
    <section id="om" class="about fade-in">
      <h2 class="section-title">Mitt namn är Lisa</h2>
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