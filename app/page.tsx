"use client";

import Divider from "@/ui/Divider";
import Hero from "@/ui/Hero";
import Mynav from "@/ui/Mynav";
import Header1 from "@/ui/header/Header1";
import { useState } from "react";

const NAV_LINKS = ["Work", "Skills", "Projects", "Contact"];
export { NAV_LINKS };

const EXPERIENCE = [
  {
    company: "Meridian Studio",
    role: "Senior Product Designer",
    period: "2022 — Present",
    location: "San Francisco, CA",
    desc: "Led end-to-end design for a SaaS analytics platform serving 40k+ users. Established a component library adopted across 3 product teams. Reduced onboarding friction by 34% through redesigned first-run flows.",
    tags: ["Systems design", "Research", "Prototyping"],
  },
  {
    company: "Carta",
    role: "Product Designer",
    period: "2020 — 2022",
    location: "Remote",
    desc: "Designed equity management workflows for 8,000+ companies. Owned the cap table editor from discovery through launch. Collaborated with engineering on a16z-backed design review cycles.",
    tags: ["Fintech UX", "Complex data", "Figma"],
  },
  {
    company: "Freehand Agency",
    role: "UI/UX Designer",
    period: "2018 — 2020",
    location: "New York, NY",
    desc: "Delivered visual identities and digital products for clients in fashion, media, and e-commerce. Maintained quality across tight deadlines with a 4-person creative team.",
    tags: ["Branding", "Web design", "Client work"],
  },
];

const SKILLS = [
  { category: "Design", items: ["Product design", "Interaction design", "Design systems", "Visual identity", "Motion & micro-animation", "User research"] },
  { category: "Tools", items: ["Figma", "Framer", "Principle", "After Effects", "Rive", "Storybook"] },
  { category: "Code", items: ["HTML / CSS", "React", "TypeScript", "Tailwind CSS", "Git", "Storybook"] },
];

const PROJECTS = [
  {
    title: "Meridian Design System",
    type: "Systems",
    year: "2023",
    desc: "Built a token-based component library from scratch — 140+ components, dark mode, and full Figma–code parity. Adopted by all product teams within six months.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "Carta Cap Table Editor",
    type: "Product",
    year: "2021",
    desc: "Redesigned the core equity ledger experience for 8k companies managing billions in shares. 0-to-1 feature with collaborative editing and real-time validation.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "Sable — Finance App",
    type: "Mobile",
    year: "2020",
    desc: "End-to-end mobile banking UX for a Series A startup targeting the US immigrant market. Shipped iOS and Android with a 4.7-star App Store rating.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
  },
];

export default function App() {
  const [activeSkill, setActiveSkill] = useState("Design");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <Mynav />
      {/* Hero */}
      <Hero />

      {/* Divider */}
      <Divider />

      {/* Work Experience */}
      <section id="work" className="px-8 py-24 md:px-16 md:py-32">
        <div className="max-w-5xl mx-auto">
          <Header1 label="Work Experience" count={"01"} />
          <div className="space-y-0">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="group grid md:grid-cols-[1fr_2fr] gap-6 md:gap-16 py-10 border-t transition-colors duration-200" style={{ borderColor: "var(--border)" }}>
                <div>
                  <p className="text-xs mb-1" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>{job.period}</p>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>{job.location}</p>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <h3 className="text-lg font-medium" style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}>{job.company}</h3>
                    <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{job.role}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--secondary-foreground)" }}>{job.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded" style={{ background: "var(--secondary)", color: "var(--secondary-foreground)", fontFamily: "var(--font-mono)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-24 md:px-16 md:py-32" style={{ background: "var(--muted)" }}>
        <div className="max-w-5xl mx-auto">
          <Header1 label="Skills" count={"02"} />
          <div className="flex flex-col md:flex-row gap-12 md:gap-0">
            {/* Category tabs */}
            <div className="flex md:flex-col gap-2 md:gap-1 md:w-48 md:shrink-0">
              {SKILLS.map((s) => (
                <button
                  key={s.category}
                  onClick={() => setActiveSkill(s.category)}
                  className="text-left px-3 py-2 text-sm font-medium rounded transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-sans)",
                    background: activeSkill === s.category ? "var(--primary)" : "transparent",
                    color: activeSkill === s.category ? "var(--primary-foreground)" : "var(--muted-foreground)",
                  }}
                >
                  {s.category}
                </button>
              ))}
            </div>
            {/* Items */}
            <div className="flex-1 md:pl-16">
              {SKILLS.filter((s) => s.category === activeSkill).map((s) => (
                <div key={s.category} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {s.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--primary)" }} />
                      <span className="text-sm" style={{ color: "var(--foreground)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-24 md:px-16 md:py-32">
        <div className="max-w-5xl mx-auto">
          <Header1 label="Selected Projects" count={"03"} />
          <div className="space-y-2">
            {PROJECTS.map((p, i) => (
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
                        <span className="text-xs px-2 py-1 rounded" style={{ background: "var(--secondary)", color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>{p.type}</span>
                        <span className="text-xs" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>{p.year}</span>
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
                      src={p.img}
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

      {/* Contact */}
      <section id="contact" className="px-8 py-32 md:px-16 md:py-40" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <Header1 label="Get In Touch" count={"04"} />
            <p className="text-4xl leading-tight mb-10" style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}>
              Open to new opportunities and interesting collaborations.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "var(--secondary-foreground)" }}>
              Whether it's a full-time role, contract work, or just a conversation — I'd like to hear from you.
            </p>
            <a
              href="mailto:jordan@ellisdesign.co"
              className="inline-flex items-center gap-3 text-base font-medium transition-colors duration-200"
              style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
            >
              jordan@ellisdesign.co
              <span>↗</span>
            </a>
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div className="pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                <p className="text-xs mb-1" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>Based in</p>
                <p className="text-sm" style={{ fontFamily: "var(--font-sans)" }}>San Francisco, CA — open to remote</p>
              </div>
              <div className="pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                <p className="text-xs mb-1" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>Availability</p>
                <p className="text-sm flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
                  Available from October 2026
                </p>
              </div>
              <div className="pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                <p className="text-xs mb-1" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>Preferred roles</p>
                <p className="text-sm">Senior IC, Staff Designer, Design Lead</p>
              </div>
            </div>
            <p className="text-xs mt-8" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>
              © 2026 Jordan Ellis. All work mine unless noted.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
