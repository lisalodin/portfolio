import "./styles/global.scss";
import "./styles/components/Navbar.scss";
import "./styles/components/Hero.scss";
import "./styles/components/About.scss";
import "./styles/components/ProjectCard.scss";
import "./styles/components/Projects.scss";
import "./styles/components/Skills.scss";
import "./styles/components/Contact.scss";
import "./styles/components/Footer.scss";

import { navbar } from "./components/navbar";
import { hero } from "./components/hero";
import { divider } from "./components/divider";
import { about } from "./components/about";
import { projects } from "./components/projects";
import { skills } from "./components/skills";
import { contact } from "./components/contact";
import { footer } from "./components/footer";

const app = document.getElementById("app")!;

// Komponenterna HTML-innehåll läggs till i app-diven som gör att när sidan laddas, kommer alla
// sektioner (navbar, hero, about, projects, skills, contact och footer) att visas i den ordning de är listade.
app.innerHTML = `
  ${navbar()}
  ${hero()}
  ${divider()}
  ${about()}
  ${divider()}
  ${projects()}
  ${divider()}
  ${skills()}
  ${divider()}
  ${contact()}
  ${footer()}
`;

// Scroll-triggered fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));