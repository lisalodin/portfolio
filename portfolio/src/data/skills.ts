export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "HTML5 & Semantisk HTML",
      "CSS3 / SCSS / Tailwind",
      "JavaScript (ES6+)",
      "React",
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