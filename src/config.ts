export const SITE = Object.freeze({
  year: "2024",
} as const);

export const PROFILE = Object.freeze({
  email: "nicodnt@icloud.com",
  headline:
    "i build purposeful mobile and web products. passionate about sustainable product development and dev tooling!",
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

export const PROJECTS = Object.freeze({
  mantram: {
    name: "mantram",
    summary:
      "Mobile-friendly online library of Buddhist mantrams. Great performance and ergonomic DX — thanks to Astro, Tailwind, and Rust.",
    urls: [
      {
        label: "site",
        url: "https://mantram.blog/",
      },
      {
        label: "source",
        url: "https://github.com/ndinata/mantram/",
      },
    ],
    techStack: ["Astro", "Reactjs", "TailwindCSS", "Rust"],
  },
} as const satisfies Record<string, Project>);

type Project = {
  name: string;
  summary: string;
  urls?: {
    label: string;
    url: string;
  }[];
  techStack: string[];
};
