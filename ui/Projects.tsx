"use client";

import { projects } from "@/generated/prisma/client";
import { useState } from "react";
import Header1 from "./header/Header1";

export default function Projects({ projects }: { projects: any }) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  return (
    <section id="projects" className="px-8 py-24 md:px-16 md:py-32">
      <div className="max-w-5xl mx-auto">
        <Header1 label="Selected Projects" count={"03"} />
          <div className="space-y-2">
            {projects?.map((p: projects, i: number) => (
            <div
            key={i}
            className="group relative overflow-hidden rounded cursor-pointer"
            style={{ background: "var(--card)" }}
            onMouseEnter={() => setHoveredProject(i)}
            onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs px-2 py-1 rounded" style={{ background: "var(--secondary)", color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>{p.title}</span>
                    <span className="text-xs" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>{p.year.toDateString()}</span>
                    </div>
                    <h3 className="text-2xl mb-4 leading-tight" style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}>{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-foreground)" }}>{p.desc}</p>
                </div>
                <div className="mt-8">
                    <span
                    className="text-xs font-medium flex items-center gap-2 transition-all duration-200"
                    style={{ color: hoveredProject === i ? "var(--primary)" : "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
                    >
                    View case study
                    <span className="transition-transform duration-200" style={{ transform: hoveredProject === i ? "translateX(4px)" : "translateX(0)" }}>→</span>
                    </span>
                </div>
                </div>
                <div className="relative overflow-hidden h-56 md:h-auto" style={{ background: "var(--secondary)" }}>
                <img
                    src={p.image ?? "/images/placeholder.png"}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: hoveredProject === i ? "scale(1.04)" : "scale(1)", filter: "brightness(0.75)" }}
                />
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
    </section>
  );
}