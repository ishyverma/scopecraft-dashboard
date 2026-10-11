export type Sourced = { text: string; at: string };
export const problems: Sourced[] = [
  { text: "Users abandon onboarding", at: "04:12" },
  { text: "Existing navigation is confusing", at: "09:48" },
  { text: "Product has inconsistent patterns", at: "15:30" },
];
export const requested: Sourced[] = [
  { text: "UX audit", at: "07:26" },
  { text: "Onboarding redesign", at: "08:02" },
  { text: "Design system cleanup", at: "16:14" },
];
export const constraints: Sourced[] = [
  { text: "Existing engineering team builds it", at: "22:10" },
  { text: "6 to 8 week target", at: "18:40" },
  { text: "Existing component library", at: "16:40" },
];
export const unknowns = [
  { text: "Number of onboarding flows", status: "Not mentioned" },
  { text: "Engineering constraints", status: "Not mentioned" },
  { text: "Required research depth", status: "Mentioned, not decided" },
];
export const quotes = [
  { at: "04:12", who: "Odalys Brandt", text: "Half of our signups never finish setup. That is the number I need to move this year." },
  { at: "07:26", who: "Odalys Brandt", text: "Honestly we should redesign the whole product, but onboarding is where it hurts." },
  { at: "22:10", who: "Corwin Achebe", text: "My team builds it. We need specs we can ship without guessing." },
];
export const tabs = ["Overview","Discovery","Scope","Similar projects","Estimate","Pricing","Risks","Proposal","SOW","Activity"];
