"use client";

import { useState, useEffect } from "react";

const work = [
  {
    title: "Technical Product Manager Intern",
    company: "Cotriply",
    dates: "2026 – Present",
    impact: "Architected the roadmap for an AI travel MVP, translating business requirements into clearly scoped engineering execution.",
  },
  {
    title: "Web Developer",
    company: "UW Product Management Club",
    dates: "2025 – 2026",
    impact: "Maintained and deployed updates to the website.",
  },
  {
    title: "Aquatic Deck Supervisor",
    company: "City of Mississauga",
    dates: "2023 – 2025",
    impact: "Ensured safe and efficient operations during swim programs.",
  },
];

const projects = [
  {
    title: "CyberSea",
    description: "Built a maritime logistics simulator that modeled patrol resource allocation across Arctic bases and won 1st place at uOttawa Hacks.",
    github: "https://github.com/OwenLi8888/CyberSea",
  },
  {
    title: "NFL Win Drivers",
    description: "Analyzed multi-season NFL data to identify the team statistics that most strongly impact win percentage.",
    github: "https://github.com/OwenLi8888/nfl-win-drivers",
  },
  {
    title: "Student Finance Tracker (Excel + VBA)",
    description: "Built an Excel VBA tool to track transactions and automate overspending alerts and budget forecasting.",
    github: "https://github.com/OwenLi8888/student-finance-tracker-excel",
  },
];

const gallery = [
  { src: "/gallery/eagle.png", alt: "Bald eagle oil painting", title: "Eagle", material: "Oil on canvas" },
  { src: "/gallery/sailboat.png", alt: "Sailboat at sunset oil painting", title: "Sailboat at Sunset", material: "Oil on canvas" },
  { src: "/gallery/rhino.png", alt: "Rhino ink drawing", title: "Rhino", material: "Ink on paper" },
  { src: "/gallery/jellyfish.png", alt: "Jellyfish graphite drawing", title: "Jellyfish", material: "Graphite on paper" },
];

const linkClass =
  "text-black hover:underline underline-offset-2 decoration-black/40";

function TypewriterName() {
  const text = "Owen Li";
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (displayed.length >= text.length) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, 85);
    return () => clearTimeout(t);
  }, [displayed]);

  return (
    <span>
      {displayed}
      {!done && (
        <span
          className="ml-0.5 inline-block h-[0.9em] w-[2px] animate-pulse bg-black/70 align-middle"
          aria-hidden
        />
      )}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-[720px] px-6">
        <header className="py-10">
          <h1 className="font-['Canela'] text-4xl font-bold italic tracking-tight sm:text-5xl">
            <TypewriterName />
          </h1>
          <div className="mt-6 space-y-3 text-black/80 leading-relaxed">
            <p>i'm a management engineering student at the university of waterloo.</p>
            <p>i'm interested in product, optimization, and designing systems that bring structure to messy problems.</p>
            <p>outside of work, i paint in oils, lift heavy things, solve rubik's cubes, and spend time with my dog.</p>
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            <a href="mailto:owen.li1@uwaterloo.ca" className="hover:underline underline-offset-2">owen.li1@uwaterloo.ca</a>
            <span className="mx-1.5">·</span>
            <a href="https://www.linkedin.com/in/owen-li-waterloo/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">LinkedIn</a>
            <span className="mx-1.5">·</span>
            <a href="https://github.com/OwenLi8888" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">GitHub</a>
          </p>
          <nav className="mt-8 flex gap-8 text-xl" aria-label="Main">
            <a href="#work" className={linkClass}>
              Work
            </a>
            <a href="#projects" className={linkClass}>
              Projects
            </a>
            <a href="#gallery" className={linkClass}>
              Gallery
            </a>
          </nav>
        </header>

        <hr className="border-t border-black/20" />

        <section id="work" className="py-8" aria-labelledby="work-heading">
          <h2
            id="work-heading"
            className="mb-5 text-3xl font-semibold tracking-tight"
          >
            Work
          </h2>
          <ul className="space-y-10">
            {work.map((role) => (
              <li key={role.title}>
                <p>
                  <span className="font-bold">{role.title}</span>
                  <span className="font-medium text-black/70"> | {role.company}</span>
                  <span className="font-normal text-black/50"> | {role.dates}</span>
                </p>
                <p className="mt-2 text-black/70">{role.impact}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="py-8" aria-labelledby="projects-heading">
          <h2
            id="projects-heading"
            className="mb-5 text-3xl font-semibold tracking-tight"
          >
            Projects
          </h2>
          <ul className="space-y-10">
            {projects.map((project) => (
              <li key={project.title}>
                <p className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold transition-all hover:underline ${linkClass}`}
                  >
                    {project.title}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-black" aria-hidden>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </p>
                <p className="mt-2 text-black/70">{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="gallery" className="py-8" aria-labelledby="gallery-heading">
          <h2
            id="gallery-heading"
            className="mb-5 text-3xl font-semibold tracking-tight"
          >
            Gallery
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {gallery.map((item) => (
              <figure key={item.src} className="space-y-2">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`h-full w-full object-cover ${item.title === "Jellyfish" ? "object-top" : "object-center"}`}
                  />
                </div>
                <figcaption className="mt-2">
                  <span className="block text-[15px] font-medium">{item.title}</span>
                  <span className="mt-0.5 block text-xs text-neutral-500">{item.material}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
