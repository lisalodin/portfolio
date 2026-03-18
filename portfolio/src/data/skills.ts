export interface SkillGroup {
  category: string;
  items: string[];
}

// Data för att visa mina färdigheter i frontend-utveckling och relaterade verktyg
export const skillsData: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "HTML5 & Semantisk HTML",
      "CSS3 / SCSS / Bootstrap",
      "JavaScript (ES6+)",
      "React - senare i vår",
      "TypeScript",
      "Responsiv design",
    ],
  },
  {
    category: "Verktyg",
    items: [
      "Git & GitHub",
      "VS Code",
      "Figma",
      "npm / Vite",
      "Chrome DevTools",
      "REST API:er",
    ],
  },
  {
    category: "Övrigt",
    items: [
      "Tillgänglighet (a11y)",
      "Agilt / Scrum",
      "UX-tänk",
      "Samarbete & kommunikation",
    ],
  },
];