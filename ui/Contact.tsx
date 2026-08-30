import Header1 from "@/ui/header/Header1";
export default function Contact() {
    return (
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
    );
}