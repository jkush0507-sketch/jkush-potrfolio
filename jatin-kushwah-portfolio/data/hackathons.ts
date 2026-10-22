export type Credential = { event: string; organizer: string; year: string; project: string; role: string; certificate: string; result: string; contributions: string[]; asset: string | null };
export const credentials: Credential[] = [
  { event: "DoraHacks", organizer: "Dora DAO", year: "2026", project: "HumanGrid", role: "Team Lead & Primary Developer",
    certificate: "Participation Certificate", result: "Participated with my team; my team did not win.",
    contributions: ["Led the team during the hackathon", "Took primary responsibility for development", "Worked on the HumanGrid project", "Collaborated on problem-solving under hackathon constraints"],
    asset: null }
];
