export type SkillGroup = { id: string; title: string; context: string; blurb: string; skills: string[]; visual: "python" | "sql" | "bi" | "frontend" | "backend" | "ai" };
export const skillGroups: SkillGroup[] = [
  { id: "python-data", title: "Python & Data Analysis", context: "Project and learning experience", blurb: "Using Python-based tools to clean, transform, explore, and visualize data.", skills: ["Python", "Pandas", "NumPy", "Matplotlib"], visual: "python" },
  { id: "sql-databases", title: "SQL & Databases", context: "Professional experience", blurb: "Querying, organizing, and validating structured data across relational databases.", skills: ["SQL", "MySQL", "SQLite"], visual: "sql" },
  { id: "bi-reporting", title: "Business Intelligence", context: "Professional experience", blurb: "Building reports and dashboards that make operational data easier to understand.", skills: ["Microsoft Excel", "Power BI", "Tableau"], visual: "bi" },
  { id: "frontend", title: "Frontend Development", context: "Project and learning experience", blurb: "Building responsive interfaces and component-based web applications.", skills: ["React", "TypeScript", "Next.js", "Vite"], visual: "frontend" },
  { id: "backend", title: "Backend & Infrastructure", context: "Project and learning experience", blurb: "Exploring API development, relational data storage, and caching concepts.", skills: ["FastAPI", "PostgreSQL", "Redis"], visual: "backend" },
  { id: "ai-workflows", title: "AI-Assisted Development", context: "Exploring", blurb: "Using AI tools to support research, exploration, debugging, and development workflows.", skills: ["ChatGPT", "Perplexity", "Claude"], visual: "ai" }
];
