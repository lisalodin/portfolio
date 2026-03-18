export interface SkillGroup {
  category: string;
  items: string[];
}

// Data för att visa mina färdigheter i frontend-utveckling och relaterade verktyg
export const skillsData: SkillGroup[] = [
  {
    category: "Utveckling",
    items: [
      "HTML5",
      "CSS / SCSS / Bootstrap",
      "JavaScript",
      "Next",
      "TypeScript",
      "Responsiv design",
      "Node.js",
      "Socket.io",
      "Restfull API:s",
    ],
  },
  {
    category: "Verktyg",
    items: [
      "Git & GitHub",
      "VS Code",
      "Figma",
      "Vite & npm",
      "Chrome DevTools",
    ],
  },
  {
    category: "Övrigt",
    items: [
      "Tillgänglighet",
      "Agilt / Scrum",
      "UX-tänk",
      "Samarbete & kommunikation - grupparbeten",
      "MongoDB",
    ],
  },
];