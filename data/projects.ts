export type Project = {
  title: string;
  slug: string;
  year: string;
  category: string;
  description: string;
  url?: string;

  // Project info sections
  brief: string;
  style: string;
  features: string[];
  reflection: string;

  collage: [string, string, string];
  gallery: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Project One",
    slug: "project-one",
    year: "2026",
    category: "Website",
    description:
      "A clean, modern build with strong structure, motion, and generous whitespace.",
    url: "https://example.com",

    brief:
      "A minimalist archive layout built to give a small set of projects a big, confident presence.",
    style:
      "White canvas, large type, rounded surfaces, soft borders, and expressive spring motion.",
    features: [
      "Cinematic hero with word-by-word intro",
      "Three-image animated collage chapters",
      "Auto-generated Work index + dynamic project pages",
      "Fast, lightweight UI with clean spacing rhythm",
    ],
    reflection:
      "This project explores how scale, rhythm, and motion can make minimal content feel complete and intentional.",

    collage: [
      "/projects/project-one/1.jpg",
      "/projects/project-one/2.jpg",
      "/projects/project-one/3.jpg",
    ],
    gallery: [
      "/projects/project-one/1.jpg",
      "/projects/project-one/2.jpg",
      "/projects/project-one/3.jpg",
      "/projects/project-one/4.jpg",
    ],
    featured: true,
  },
  {
    title: "Project Two",
    slug: "project-two",
    year: "2025",
    category: "Product",
    description:
      "A startup-style layout with bold sections, large type, and expressive transitions.",
    url: "https://example.com",

    brief:
      "A product-led page system designed to feel modern, spacious, and motion-forward.",
    style:
      "Clean grid, strong hierarchy, subtle blue accents, and high-contrast typography.",
    features: [
      "Alternating chapter layout for strong visual rhythm",
      "Hover energy: lift, glow, and micro-tilt",
      "Reusable content model for easy scaling",
      "Large-format imagery with editorial spacing",
    ],
    reflection:
      "The strongest outcome is the overall pacing — each section lands like a product reveal rather than a traditional portfolio card.",

    collage: [
      "/projects/project-two/1.jpg",
      "/projects/project-two/2.jpg",
      "/projects/project-two/3.jpg",
    ],
    gallery: [
      "/projects/project-two/1.jpg",
      "/projects/project-two/2.jpg",
      "/projects/project-two/3.jpg",
      "/projects/project-two/4.jpg",
    ],
    featured: true,
  },
  {
    title: "Project Three",
    slug: "project-three",
    year: "2024",
    category: "Interface",
    description:
      "A minimal archive-style presentation with high-impact motion and big rhythm.",
    url: "https://example.com",

    brief:
      "A clean interface study focused on structure, spacing, and expressive interaction.",
    style:
      "Minimal surfaces, generous margins, rounded geometry, and deliberate animation curves.",
    features: [
      "Big typography + calm whitespace",
      "Consistent card system and image treatment",
      "Scales from 3 projects to 30 with a single data source",
      "Clear navigation with a strong “archive” feel",
    ],
    reflection:
      "Keeping the site non-commercial sharpened the presentation — the work reads as a curated catalogue rather than a pitch.",

    collage: [
      "/projects/project-three/1.jpg",
      "/projects/project-three/2.jpg",
      "/projects/project-three/3.jpg",
    ],
    gallery: [
      "/projects/project-three/1.jpg",
      "/projects/project-three/2.jpg",
      "/projects/project-three/3.jpg",
      "/projects/project-three/4.jpg",
    ],
    featured: true,
  },
];
