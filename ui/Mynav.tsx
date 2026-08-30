"use client";
export default function Mynav() {
    const NAV_LINKS = ["Work", "Skills", "Projects", "Contact"];
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 md:px-16" style={{ background: "linear-gradient(to bottom, #0c0c0b 60%, transparent)" }}>
        <a href="#" className="font-serif text-base tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
          <span className="text-[--foreground]">Jordan</span>
          <span style={{ color: "var(--primary)" }}>.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--foreground)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted-foreground)")}
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-xs font-medium px-4 py-2 rounded transition-all duration-200"
          style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "var(--font-sans)" }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.85"; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; }}
        >
          Hire me
        </a>
      </nav>
    )
}