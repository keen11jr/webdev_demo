"use client";

import { skills } from "@/generated/prisma/client";
import Header1 from "@/ui/header/Header1";
import { useState } from "react";

const SKILLS: skills[] = [];

export default function Skills( { skills }: { skills: skills[] } ) {
  const [activeSkill, setActiveSkill] = useState("Design");

  return (
        <section id="skills" className="px-8 py-24 md:px-16 md:py-32" style={{ background: "var(--muted)" }}>
                <div className="max-w-5xl mx-auto">
                  <Header1 label="Skills" count={"02"} />
                  <div className="flex flex-col md:flex-row gap-12 md:gap-0">
                    {/* Category tabs */}
                    <div className="flex md:flex-col gap-2 md:gap-1 md:w-48 md:shrink-0">
                      {skills?.map((s) => (
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
                      {skills?.filter((s) => s.category === activeSkill).map((s) => (
                        <div key={s.category} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {/* {s?.items?.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--primary)" }} />
                              <span className="text-sm" style={{ color: "var(--foreground)" }}>{item}</span>
                            </div>
                          ))} */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
    )
}