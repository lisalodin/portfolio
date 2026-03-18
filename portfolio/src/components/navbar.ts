// Exporterar en funktion som returnerar HTML-koden för navigationsbaren
export function navbar(): string {
  return `
    <nav class="navbar">
      <div class="navbar-inner">
        <a href="#" class="navbar-logo">Lisa.</a>
        <div class="navbar-links">
          <a href="#om">Om mig</a>
          <a href="#projekt">Projekt</a>
          <a href="#skills">Tekniker</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </div>
    </nav>
  `;
}