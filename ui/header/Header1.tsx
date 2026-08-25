interface Header1Props {
    label: string;
    count: string;
}

export default function Header1({ label, count }: Header1Props) {
    return (
        <div className="flex items-center gap-4 mb-16">
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>{count}</span>
            <h2 className="text-2xl font-medium" style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}>{label}</h2>
        </div>
    )
}