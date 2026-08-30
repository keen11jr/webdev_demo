"use server";
import Mynav from "@/ui/Mynav";
import { getPortfolio } from "@/lib/actions/portfolio";
import Divider from "@/ui/Divider";
import Experiences from "@/ui/Experiences";
import Hero from "@/ui/Hero";
import Projects from "@/ui/Projects";
import Skills from "@/ui/Skills";
import Contact from "@/ui/Contact";

export default async function App() {
  const userEmail = "once.crisanto.jr@gmail.com"; // Replace with the actual email of the user you want to fetch
  const userPortfolio: Awaited<ReturnType<typeof getPortfolio>> = await getPortfolio(userEmail);
  
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <Mynav />
      <Hero portfolio={userPortfolio} />
      <Divider />
      <Experiences experiences={userPortfolio?.experiences} />
      <Skills skills={userPortfolio?.skills} />
      <Projects projects={userPortfolio?.projects} />
      <Contact />
    </div>
  );
}
