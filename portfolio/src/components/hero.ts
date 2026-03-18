// Funktion som returnerar HTML-koden för hero-sektionen
export function hero(): string {
  return `
    <section class="hero">
      <div class="hero-inner">
        <p class="hero-eyebrow">Frontend Developer · Stockholm</p>
        <h1>
          Jag bygger
          <br />
          <em>digitala upplevelser</em>
        </h1>
        <p class="hero-desc">
          Frontendutvecklare under utbildning med öga för design och passion för
          att skapa snygga, tillgängliga och användarvänliga gränssnitt.
        </p>
        <div class="hero-cta">
          <a href="#projekt" class="btn-primary">Se mina projekt</a>
          <a href="#kontakt" class="btn-secondary">Kontakta mig</a>
        </div>
      </div>
    </section>
  `;
}