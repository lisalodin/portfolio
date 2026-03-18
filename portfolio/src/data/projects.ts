export interface Project {
  id: number;
  title: string;
  description: string;
  img?: string; 
  tags: string[];
  github: string;
  live?: string;
}

// Exporterar en lista med projektdata som kan användas i portföljsektionen av webbplatsen.
// Varje projekt har ett unikt ID, titel, beskrivning, tekniska taggar, GitHub-länk och valfri live-länk.
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Candy webshop",
    description:
      "Ett grupparbete om 4 personer med fokus på den agila utvecklingsprocessen, kunskaper inom HTML, SCSS och TypeScript.",
    img: "/assets/candywebshop.png",
    tags: ["HTML", "SCSS", "TypeScript"],
    github: "https://github.com/lisalodin/candywebshop",
    live: "https://candywebshop-git-main-lisa-lodins-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Projektnamn",
    description:
      "Kort beskrivning av projektet — vad det gör, vilken utmaning det löser, och vad du lärde dig.",
    img: "/assets/candywebshop.png",
    tags: ["JavaScript", "HTML", "SCSS"],
    github: "https://github.com/ditt-användarnamn/repo-2",
    live: "https://projekt-2.vercel.app",
  },
];