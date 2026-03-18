// Interface för att definiera strukturen på detaljobjektet
export interface DetailItem {
  label: string;
  value: string;
}

// Exporterar en lista med texter som beskriver mig själv
export const aboutText: string[] = [
  "En dalkulla som flyttade till Stockholm 2015 med ett brinnande intresse för träning. Efter 8 år som ledare och projektledare inom träningsbranschen bestämde jag mig för att ta nästa steg och byta karriär.",
  "Idag satsar jag på en teknisk bana då mitt intresse för teknik och design som väcktes redan under gymnasietiden på Mediaprogrammet. Mitt mål är att kombinera mina tekniska kunskaper med min arbetslivserfarenhet av ledarskap och teamarbete.",
  "Nu studerar jag frontendutveckling och ser fram emot min kommande LIA-praktik i höst. Jag drivs av nyfikenhet och tycker om att ta en idé från skiss till färdig lösning, med fokus på responsivitet, tillgänglighet och genomtänkt kod.",
  "Som person är jag samarbetsinriktad, lär mig snabbt nya verktyg och brinner för att skapa gränssnitt som både är visuellt tilltalande och smidiga att använda.",
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