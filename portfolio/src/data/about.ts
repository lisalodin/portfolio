// Interface för att definiera strukturen på detaljobjektet
export interface DetailItem {
  label: string;
  value: string;
}

// Exporterar en lista med texter som beskriver mig själv
export const aboutText: string[] = [
  "Jag studerar frontend-utveckling och i höst är det dags för LIA-praktik. Jag drivs av nyfikenhet och älskar att ta en design från skiss till färdig kod — med fokus på responsivitet, tillgänglighet och rena lösningar.",
  "Jag trivs i team, är snabb på att lära mig nya verktyg, och brinner för att skapa gränssnitt som både ser bra ut och fungerar sömlöst.",
];

// Exporterar en lista med detaljer om mig själv
export const details: DetailItem[] = [
  { label: "Plats", value: "Stockholm, Sverige" },
  { label: "Utbildning", value: "Frontend-utvecklare YH" },
  { label: "Söker", value: "LIA / praktikplats — hösten 2026" },
  { label: "Språk", value: "Svenska · Engelska" },
];

// Exporterar en lista med sociala länkar
export const socialLinks = {
  email: "lisalodin@hotmail.com",
  github: "https://github.com/lisalodin",
  linkedin: "https://www.linkedin.com/in/lisa-lodin",
};