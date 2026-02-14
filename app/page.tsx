"use client";

import { useState, useEffect } from "react";

const projects = [
  {
    title: "Analytics Pipeline",
    description: "End-to-end data ingestion and transformation for product metrics.",
    stack: "Python, Airflow, BigQuery",
  },
  {
    title: "Operational Dashboard",
    description: "Real-time monitoring and alerting for critical systems.",
    stack: "React, TypeScript, Prometheus",
  },
  {
    title: "Product Taxonomy Engine",
    description: "Hierarchical classification and search for large catalogs.",
    stack: "Node.js, PostgreSQL, Elasticsearch",
  },
  {
    title: "Workflow Orchestrator",
    description: "Automated task routing and approval flows for operations.",
    stack: "Go, Kafka, Redis",
  },
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
        <header className="py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <TypewriterName />
          </h1>
          <p className="mt-3 text-lg text-black/60">
            Data, Ops, Product systems builder
          </p>
          <nav className="mt-12 flex gap-8" aria-label="Main">
            <a href="#work" className={linkClass}>
              Work
            </a>
            <a href="#about" className={linkClass}>
              About
            </a>
            <a href="#contact" className={linkClass}>
              Contact
            </a>
          </nav>
        </header>

        <section id="work" className="py-24" aria-labelledby="work-heading">
          <h2
            id="work-heading"
            className="mb-12 text-2xl font-semibold tracking-tight"
          >
            Work
          </h2>
          <ul className="space-y-10">
            {projects.map((project) => (
              <li key={project.title}>
                <a
                  href="#"
                  className={`block font-semibold transition-all hover:underline ${linkClass}`}
                >
                  {project.title}
                </a>
                <p className="mt-1 text-black/80">{project.description}</p>
                <p className="mt-1 text-sm text-black/50">{project.stack}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="py-24" aria-labelledby="about-heading">
          <h2
            id="about-heading"
            className="mb-12 text-2xl font-semibold tracking-tight"
          >
            About
          </h2>
          <div className="space-y-6 text-black/85 leading-relaxed">
            <p>
              I build systems that turn data into decisions. My work sits at the
              intersection of data pipelines, operational tooling, and product
              infrastructure.
            </p>
            <p>
              I focus on clarity: clean schemas, reliable pipelines, and UIs
              that surface the right information at the right time. Complexity
              gets hidden behind simple interfaces.
            </p>
            <p>
              Previously built analytics platforms, internal tools, and
              automation for scaling teams. I prefer shipping incrementally over
              perfect architecture.
            </p>
          </div>
        </section>

        <section id="contact" className="py-24" aria-labelledby="contact-heading">
          <h2
            id="contact-heading"
            className="mb-12 text-2xl font-semibold tracking-tight"
          >
            Contact
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a
              href="mailto:owen@example.com"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              owen@example.com
            </a>
            <a
              href="https://github.com/owenli"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/owenli"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
