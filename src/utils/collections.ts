// collections.ts

// Define a string literal type for the collection names
export type CollectionName =
  | "userInfo"
  | "workspaceDescriptions"
  | "skills"
  | "workingPeriods"
  | "languages"
  | "educations"
  | "certifications"
  | "news"
  | "aboutUs"
  | "services"
  | "contactUs";
// | "messages";

// Define and export the collections array
const collections: CollectionName[] = [
  "userInfo",
  "workspaceDescriptions",
  "skills",
  "workingPeriods",
  "languages",
  "educations",
  "certifications",
  "news",
  "aboutUs",
  "services",
  "contactUs",
  // "messages",
];

export default collections;
