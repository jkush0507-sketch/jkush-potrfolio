export type Project = { id: string; name: string; status: "In Development"; tagline: string; description: string; role?: string; verified: string[]; planned: string[]; stack: string[] };
export const projects: Project[] = [
  { id: "humangrid", name: "HumanGrid", status: "In Development", tagline: "Human-assistance platform concept",
    description: "HumanGrid is a human-assistance platform concept developed for the DoraHacks hackathon in 2026. I participated as Team Lead and Primary Developer, taking primary responsibility for development while collaborating with my team under hackathon constraints.",
    role: "Team Lead & Primary Developer",
    verified: ["Developed for DoraHacks 2026", "Team-based hackathon project", "Team Lead and Primary Developer"],
    planned: ["Continue evolving the human-assistance platform concept"],
    stack: ["Hackathon", "Team collaboration", "Product concept"] },
  { id: "humnora", name: "Humnora", status: "In Development", tagline: "Emergency response and human-assistance platform concept",
    description: "Humnora is the evolving version of my emergency response and human-assistance platform concept. Its intended goal is to connect people seeking assistance with relevant helpers, volunteers, hospitals, NGOs, and service providers.",
    verified: ["Concept and architecture in development", "Intended assistance categories defined", "Intended technical ecosystem identified"],
    planned: ["Emergency response", "Blood assistance", "Food support", "Medicine assistance", "Shelter", "Women and child safety", "Humanitarian assistance"],
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Gemini", "Expo / React Native"] }
];
