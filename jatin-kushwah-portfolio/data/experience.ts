export type ExperienceItem = { company: string; role: string; type: "Full-time" | "Internship"; duration: string; summary: string; highlights: string[] };
export const experience: ExperienceItem[] = [
  { company: "Prayag Associate", role: "Data Analyst Executive", type: "Full-time", duration: "Approx. 1 year",
    summary: "Full-time analytics work focused on operational reporting and turning raw business data into clear, usable reports.",
    highlights: ["MIS reporting", "Excel and Power BI reporting", "Data cleaning and validation", "Operational reporting", "Preparing useful business reports"] },
  { company: "Driftwood Interiors", role: "Data Analyst Intern", type: "Internship", duration: "Approx. 6 months",
    summary: "Internship focused on sales, customer, inventory, and operational data analysis.",
    highlights: ["Sales and customer analysis", "KPI dashboards", "Data cleaning and transformation", "Demand and stock movement analysis"] }
];
