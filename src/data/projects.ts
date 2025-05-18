export interface Project {
  title: string;
  techStack: string[];
  problem: string;
  solution: string;
  how: string[];
  link: string;
}

export const projects: Project[] = [
   {
    title: "TweetGenius",
    techStack: [
      "Next.js", "Tailwind CSS", "OpenAI API"
    ],
    problem: "Creators and founders struggle with Twitter content strategy and consistency.",
    solution: "A tweet and thread generator for personal brands, startups, and creators to draft engaging content quickly.",
    how: [
      "Users input a topic or style",
      "AI generates tweet drafts and threads",
      "Can copy to clipboard or export as CSV"
    ],
    link: "https://tweetgenius.elidayjuma.com"
  },
    {
    title: "InterviewPrep",
    techStack: [
      "Next.js", "Tailwind CSS", "MongoDB", "OpenAI API"
    ],
    problem: "Developers and tech professionals lack affordable, interactive mock interview tools tailored to their tech stack.",
    solution: "An AI-driven platform that helps users practice technical and behavioral questions before interviews.",
    how: [
      "Generates custom interview questions",
      "Simulates realistic mock interview experiences",
      "Stores user history and provides feedback"
    ],
    link: "https://interviewprep.elidayjuma.com"
  },
  
  {
    title: "MoveCalculator",
    techStack: [
      "Next.js", "Tailwind CSS", "Node.js"
    ],
    problem: "Most people struggle with estimating the cost of hauling services.",
    solution: "A simple tool for dirvers and their estimate to estimate the cost of moving.",
    how: [
      "Users key in their details",
      "Calculation is done using a simple formula",
      "The result is displayed in a simple UI with cost breakdown"
    ],
    link: "https://movecalculator.tosomewherelogistics.africa"
  },
  {
    title: "ToSomewhere Logistics",
    techStack: [
      "Next.js", "Tailwind CSS", "Node.js (planned)", "PostgreSQL (planned)"
    ],
    problem: "Lack of a central, transparent platform for logistics clients and providers in Kenya to connect and transact.",
    solution: "A logistics marketplace connecting individuals and businesses to drivers and truck owners for delivery and freight services.",
    how: [
      "Users post logistics gigs; drivers bid on them",
      "Designed a bidding workflow and pickup station model",
      "Simple interface for both ends (consumers and drivers)"
    ],
    link: "https://tosomewherelogistics.africa"
  },
  {
    title: "NenoPress",
    techStack: [
      "Node.js", "TypeScript", "MariaDB", "JWT/OAuth", "Docker"
    ],
    problem: "Many creatives and publishers lacked robust backends for content distribution and management.",
    solution: "Built a scalable backend for managing content, users, and access permissions.",
    how: [
      "Designed RESTful APIs",
      "Built secure authentication & authorization layers",
      "Deployed using Docker and CI/CD pipelines",
      "Integrated SQL indexing and pooling for performance"
    ],
    link: "https://nenopress.com"
  },
  {
    title: "Startuplist Africa",
    techStack: [
      "Next.js", "Tailwind CSS", "Firebase (planned)"
    ],
    problem: "African startups often struggle to get visibility or connect with talent, investors, and collaborators.",
    solution: "A curated directory of African startups showcasing their value propositions, teams, and traction.",
    how: [
      "Built with simplicity and discoverability in mind",
      "Tags, filters, and profile pages for each startup",
      "Email-based newsletter for updates and new startups"
    ],
    link: "https://startuplistafrica.elidayjuma.com"
  },
  {
    title: "Namekon",
    techStack: [
      "Next.js", "Tailwind CSS", "OpenAI API", "Supabase"
    ],
    problem: "Finding a startup or domain name that’s catchy, relevant, and available is hard and time-consuming.",
    solution: "A name generator that suggests creative names for your startup or product based on your input keywords and industry.",
    how: [
      "Uses OpenAI API to generate name ideas",
      "Checks for domain and social handle availability (planned)",
      "Clean UI with history of generated names"
    ],
    link: "https://namekon.elidayjuma.com"
  },
   {
    title: "Greenland Commodities Africa",
    techStack: [
      "Node.js", "Express", "MySQL", "REST APIs"
    ],
    problem: "Agricultural businesses often suffer from poor digital infrastructure for managing procurement, logistics, and inventory.",
    solution: "Digitized backend infrastructure to help Greenland better manage supply chains and operations.",
    how: [
      "Led the redesign of backend systems",
      "Created robust REST APIs",
      "Improved database structures for efficiency",
      "Strengthened data security practices"
    ],
    link: "https://Greenlandcommodities.africa"
  },
  {
    title: "Paylend",
    techStack: [
      "MongoDB", "Express.js", "React", "Node.js", "MySQL", "React Native", "Mocha & Chai", "Docker"
    ],
    problem: "Many MSMEs in Africa operate informally and lack access to credit or digital systems for managing operations.",
    solution: "Paylend provided MSMEs with a platform to digitize their operations and access micro-loans. The platform included features for inventory, sales, and customer management, with embedded credit scoring logic.",
    how: [
      "Developed the platform using MERN stack",
      "Built hybrid mobile apps via React Native",
      "Integrated MySQL and MongoDB for data management",
      "Led tech, infrastructure, and regulatory alignment as CTO"
    ],
    link: "https://paylend.africa"
  },
 
  
];