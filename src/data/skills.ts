export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Databases & ORMs",
    skills: ["PostgreSQL", "MySQL", "MongoDb", "Prisma", "Sequelize"],
  },
  {
    category: "Test Frameworks",
    skills: ["Cypress", "Mocha & Chai", "Playwright"],
  },
  {
    category: "Frontend Frameworks",
    skills: ["Reactjs", "Nextjs"],
  },
  {
    category: "Backend",
    skills: ["Nodejs", "Express Server", "Rust", "C#", ".NET", "Python"],
  },
  {
    category: "CI/CD & TDD",
    skills: ["CI/CD", "TDD"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem solving",
      "Excellent communication",
      "Team work and collaboration",
      "Strategic thinker",
    ],
  },
];