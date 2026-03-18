export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

// Exporterar en lista med projektdata som kan användas i portföljsektionen av webbplatsen.
// Varje projekt har ett unikt ID, titel, beskrivning, tekniska taggar, GitHub-länk och valfri live-länk.
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Projektnamn",
    description:
      "Kort beskrivning av projektet — vad det gör, vilken utmaning det löser, och vad du lärde dig.",
    tags: ["React", "TypeScript", "API"],
    github: "https://github.com/ditt-användarnamn/repo-1",
    live: "https://projekt-1.vercel.app",
  },
  {
    id: 2,
    title: "Projektnamn",
    description:
      "Kort beskrivning av projektet — vad det gör, vilken utmaning det löser, och vad du lärde dig.",
    tags: ["JavaScript", "HTML", "SCSS"],
    github: "https://github.com/ditt-användarnamn/repo-2",
    live: "https://projekt-2.vercel.app",
  },
  {
    id: 3,
    title: "Projektnamn",
    description:
      "Kort beskrivning av projektet — vad det gör, vilken utmaning det löser, och vad du lärde dig.",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    github: "https://github.com/ditt-användarnamn/repo-3",
  },
  {
    id: 4,
    title: "Projektnamn",
    description:
      "Kort beskrivning av projektet — vad det gör, vilken utmaning det löser, och vad du lärde dig.",
    tags: ["Vue", "Firebase"],
    github: "https://github.com/ditt-användarnamn/repo-4",
    live: "https://projekt-4.vercel.app",
  },

];