"use client";

export default function Hero({ portfolio }: { portfolio?: any }) {
    return (
        <section className="min-h-screen flex flex-col justify-end px-8 pb-20 md:px-16 pt-32">
        <div className="max-w-5xl">
          <p className="text-xs tracking-[0.2em] uppercase mb-8" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>
            {portfolio?.profession ?? "Unknown Role"}
          </p>
          <h1 className="leading-[0.9] mb-8" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.5rem, 10vw, 9rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
            {portfolio?.name ?? "Unknown Name"}
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-24">
            <p className="text-lg leading-relaxed max-w-md" style={{ color: "var(--secondary-foreground)", fontFamily: "var(--font-sans)" }}>
              {portfolio?.introduction ?? "No bio available."}
            </p>
            <div className="flex gap-6 shrink-0">
              {["LinkedIn", "Dribble", "GitHub"].map((l) => (
                <a key={l} href="#"
                  className="text-sm font-medium transition-colors duration-200 underline underline-offset-4"
                  style={{ color: "var(--muted-foreground)", textDecorationColor: "var(--border)" }}
                  onMouseEnter={(e) => { const t = e.target as HTMLElement; t.style.color = "var(--primary)"; t.style.textDecorationColor = "var(--primary)"; }}
                  onMouseLeave={(e) => { const t = e.target as HTMLElement; t.style.color = "var(--muted-foreground)"; t.style.textDecorationColor = "var(--border)"; }}
                >{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex items-center gap-3" style={{ color: "var(--muted-foreground)" }}>
          <div className="w-8 h-px" style={{ background: "var(--border)" }} />
          <span className="text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>Scroll</span>
        </div>
      </section>
    )
}