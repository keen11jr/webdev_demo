import { prisma } from "@/lib/prisma";

async function main() {
    const alice = await prisma.users.create({
    data: {
      email: "once.crisanto.jr@gmail.com",
      name: "Crisanto Jr. Once",
      password: "password_123",
      profession: "Software Engineer",
      introduction:
        "Hello, I'm Crisanto Jr. Once, a passionate software engineer with expertise in web development and a love for creating innovative solutions.",
      role: "ADMIN",
      social_links: {
        github: "https://github.com/oncecrisantojr",
        linkedin: "https://www.linkedin.com/in/oncecrisantojr/",
        twitter: "https://twitter.com/oncecrisantojr",
      },
      address: "Sa bahay ko",
      phone: "09123456789",
      availability: "Available for freelance projects and collaborations.",
      preferred_role: "President",
      experiences: {
        create: [
          {
            company: "Tech Solutions Inc.",
            role: "Senior Software Engineer",
            period: "Jan 2020 - Present",
            location: "GMA, Cavite, Philippines",
            start_date: new Date("2020-01-01"),
            end_date: new Date("2023-12-31"),
            desc: "Led a team of developers in building scalable web applications and implementing best practices for software development.",
          },
        ],
      },
      projects: {
        create: [
          {
            title: "Portfolio Website",
            desc: "A personal portfolio website showcasing my skills, projects, and experiences.",
            year: new Date("2023-01-01"),
          },
          {
            title: "E-commerce Platform",
            desc: "Developed a full-featured e-commerce platform with shopping cart, payment integration, and order management.",
            year: new Date("2022-01-01"),
          },
          {
            title: "Task Management App",
            desc: "Created a task management application to help teams collaborate and track their work efficiently.",
            year: new Date("2021-01-01"),
          },
        ],
      },
      skills: {
        create: [
          {
            category: "Design",
            items: [
              "Product design",
              "Interaction design",
              "Design systems",
              "Visual identity",
              "Motion & micro-animation",
              "User research",
            ],
          },
          {
            category: "Tools",
            items: [
              "Figma",
              "Framer",
              "Principle",
              "After Effects",
              "Rive",
              "Storybook",
            ],
          },
          {
            category: "Code",
            items: [
              "HTML / CSS",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Git",
              "Storybook",
            ],
          },
        ],
      },
    },
  });
  console.log({ alice });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    // await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // await pool.end();
    process.exit(1);
  });
