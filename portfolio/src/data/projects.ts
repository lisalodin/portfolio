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
    title: "Todolist app",
    description:
      "Vår första uppgift om att skapa en enkel todolist-applikation.",
    img: "/assets/todolist.png",
    tags: ["JavaScript", "HTML", "SCSS"],
    github: "https://github.com/lisalodin/todolist",
    live: "https://todolist-iota-cyan.vercel.app/",
  },
];