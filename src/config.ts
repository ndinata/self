export const SITE = Object.freeze({
  year: "2024",
} as const);

export const PROFILE = Object.freeze({
  email: "nicodnt@icloud.com",
  headline:
    "hi 👋 i build purposeful mobile and web products. passionate about sustainable product development and dev tooling!",
  currentWork: {
    position: "pondering code",
    company: {
      name: "Sleeping Duck",
      url: "https://www.sleepingduck.com/au/",
    },
  },
  links: [
    { label: "LinkedIn", url: "https://linkedin.com/in/nicodinata/" },
    { label: "GitHub", url: "https://github.com/ndinata/" },
  ],
} as const);

export const EXPERIENCE = Object.freeze({
  pastWork: {
    projects: [
      { label: "Assemble", url: "https://assemble.com.au" },
      { label: "carconnect", url: "https://carconnect.com.au" },
      { label: "The Commons", url: "https://www.thecommons.com.au" },
      {
        label: "The Wine Collective",
        url: "https://www.thewinecollective.com.au/",
      },
    ],
  },
  tookit: [
    "React Native/Expo",
    "Swift/Java native modules",
    "Reactjs/Nextjs",
    "Astro",
    "TailwindCSS",
    "PostgreSQL",
    "Flask (Python)",
  ],
  product: [
    "Project management",
    "documentation building",
    "stakeholder communication",
    "familiarity with design processes and tools",
  ],
} as const);
