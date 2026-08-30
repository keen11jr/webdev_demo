import { prisma } from "@/lib/prisma";

export const getPortfolio = async (email: string) => {
  if (!email) {
    throw new Error("Email is required to fetch portfolio");
  }
  try {
    const user = await prisma.users.findUnique({
      where: { email },
      include: {
        experiences: true,
        skills: true,
        projects: true,
      },
    });

    return user;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    throw new Error("Failed to fetch portfolio");
  }
};
