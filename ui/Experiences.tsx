import Header1 from "@/ui/header/Header1";

import type { experiences } from "@/generated/prisma/client";

export default function Experiences({ experiences }: { experiences: experiences[] }) {
  return (
    <section id="work" className="px-8 py-24 md:px-16 md:py-32">
    <div className="max-w-5xl mx-auto">
        <Header1 label="Work Experience" count={"01"} />
        <div className="space-y-0">
        {experiences?.map((job, i) => (
            <div key={i} className="group grid md:-cols-[1fr_2fr] gap-6 md:gap-16 py-10 border-t transition-colors duration-200" style={{ borderColor: "var(--border)" }}>
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
                {/* {job.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded" style={{ background: "var(--secondary)", color: "var(--secondary-foreground)", fontFamily: "var(--font-mono)" }}>{t}</span>
                ))} */}
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>
  );
}