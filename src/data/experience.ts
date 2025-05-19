export interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    company: "NenoPress",
    position: "Backend Engineer",
    period: "September 2024 – February 2025",
    responsibilities: [
      "Designed and developed scalable backend services for Nenopress using TypeScript and Node.js, ensuring high performance and maintainability.",
      "Implemented RESTful APIs to handle core functionalities, optimizing request handling and reducing response times.",
      "Integrated MariaDB SQL for data persistence, designing efficient relational database schemas and writing optimized queries for performance.",
      "Built authentication and authorization systems using JWT and OAuth, enhancing platform security and user management.",
      "Optimized backend performance by implementing indexing, query optimization, and connection pooling in MariaDB.",
      "Deployed and maintained backend services using Docker and CI/CD pipelines, ensuring smooth production rollouts and minimal downtime.",
    ],
  },
  {
    company: "Greenland Commodities Africa",
    position: "Backend Lead",
    period: "October 2023 – August 2024",
    responsibilities: [
      "Led the overhaul of the existing backend architecture to enhance scalability, reliability, and performance.",
      "Designed and implemented RESTful APIs to streamline data exchange between systems, improving operational efficiency.",
      "Refined database structures to ensure faster query execution and seamless data handling. Making strategic decisions on behalf of the company.",
      "Coordinated with cross-functional teams to align backend solutions with business requirements and goals.",
      "Implemented robust security measures to safeguard sensitive agricultural data and transactions.",
    ],
  },
  {
  company: "Paylend Limited",
  position: "CEO & Co-Founder",
  period: "January 2021 – September 2023",
  responsibilities: [
    "Led the strategic direction of Paylend, a fintech platform that provided MSMEs with access to digital payments, lending, and business tools.",
    "Fundraising & Investor Relations: Secured $500K in funding, engaging investors, venture capital firms, and impact funds.",
    "Revenue Growth & Financial Management: Increased company revenue by 20% in three months through strategic B2B partnerships and a data-driven lending model.",
    "Business Expansion & Market Entry Strategy: Expanded operations across Kenya, positioning Paylend as a leader in MSME financial solutions.",
    "Stakeholder & Partnership Management: Built strategic alliances with banks, payment providers, and regulatory bodies, ensuring compliance and product adoption.",
    "Team Leadership & Organizational Growth: Scaled the team to 20+ employees, fostering a culture of innovation and high performance.",
  ],
},
  {
    company: "Paylend Limited",
    position: "CTO",
    period: "January 2021 – December 2021",
    responsibilities: [
      "Helped the company get regulatory approvals.",
      "Trimmed the tech budget by 15% while maintaining efficiency.",
      "Put together a reliable and effective tech team.",
      "Created policies for and around tech infrastructure including data, privacy and ERP solutions.",
      "Communicated tech strategies within and outside the company.",
      "Conducted data analysis to help streamline operations.",
      "Conducted build or buy analysis for new modules to be integrated into the product or organization.",
    ],
  },
  {
    company: "Paylend Limited",
    position: "Full stack developer",
    period: "August 2019 – December 2020",
    responsibilities: [
      "Wrote the project code using MERN stack.",
      "Implemented the backend using NodeJS with data persistence using MySQL and Mongo.",
      "Wrote E2E tests for the restful APIs using Mocha and Chai which reduced buggy production code.",
      "Implemented UX/UI designs using react native to produce a hybrid application that can run on multiple platforms.",
    ],
  },
  {
    company: "Adanian labs Africa",
    position: "Full stack Developer",
    period: "February 2020 – July 2020",
    responsibilities: [
      "Built the company’s website.",
      "Built and managed the front-end modules of several projects using react and react native.",
      "Organized classes for interns learning front end development.",
    ],
  },
  {
    company: "Edgetech ltd Consults",
    position: "Full stack Developer",
    period: "August 2019 - January 2020",
    responsibilities: [
      "Designed SQL Databases and normalized them.",
      "Developed SSR frontends with nextjs.",
      "Developed API (backend) Using Node Js.",
    ],
  },
  {
    company: "Andela",
    position: "Apprenticeship",
    period: "June 2019 – November 2019",
    responsibilities: [
      "Developed Node APIs.",
      "DevOps for project management, building frontend apps with React js.",
    ],
  },
];