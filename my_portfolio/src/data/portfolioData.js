import { allProjects } from './projects/index.js';

export const personalInfo = {
  name: "LAITH MOHAMMED",
  role: "Full-Stack Engineer",
  tagline: "Architecting end-to-end digital products — from multi-tenant Next.js SaaS platforms and high-performance Flutter WebAssembly tools to robust Supabase & PostgreSQL backends.",
  email: "laithmhwork@gmail.com",
  location: "Available for Remote Full-Stack & Engineering Roles",
  resumeFile: "laith_mohammed_resume.pdf",
  coreFocus: "Next.js • Flutter / WASM • Supabase / PostgreSQL",
  
  aboutBio: `Independent Full-Stack Engineer with deep experience building production-grade digital products from zero to deployment. Rather than following tutorials, I learn by building complete, complex software systems: from multi-tenant SaaS platforms with Next.js and Supabase (PostgreSQL, RLS, Auth) to browser-based canvas editors powered by Flutter WebAssembly (WASM), and offline peer-to-peer networking utilities over local Wi-Fi hotspots. I thrive in autonomous environments where full-stack ownership, product intuition, and technical resourcefulness are required to ship real solutions.`,

  engineeringPillars: [
    {
      title: "End-to-End Product Ownership",
      description: "Designing relational database schemas and strict Row-Level Security policies up to responsive web interfaces and cross-platform clients."
    },
    {
      title: "High-Performance Runtimes & WASM",
      description: "Leveraging Flutter compiled to WebAssembly for smooth 60 FPS in-browser canvas manipulation and offline socket networking."
    },
    {
      title: "Autonomous Problem Solving",
      description: "Self-directed execution—translating complex product requirements into working, scalable architectures without relying on large teams."
    },
    {
      title: "Clean, Maintainable Architecture",
      description: "Decoupled component hierarchies, predictable reactive state management, and strict separation between domain, data, and presentation layers."
    }
  ]
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/laithmh",
    platform: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/laith-muhammad-03168b407",
    platform: "linkedin"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/laithmohammad30",
    platform: "instagram"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/laith.mh.54",
    platform: "facebook"
  }
];

export const skillTiers = [
  {
    tier: "Full-Stack Web & SaaS",
    badge: "Web Engineering",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "React 19", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "TypeScript / JavaScript", level: "Advanced" },
      { name: "SSR & Dynamic Routing", level: "Advanced" },
      { name: "Responsive UI", level: "Expert" }
    ]
  },
  {
    tier: "Cross-Platform & Canvas",
    badge: "Mobile & WASM",
    skills: [
      { name: "Flutter", level: "Expert" },
      { name: "Dart", level: "Expert" },
      { name: "Flutter WebAssembly (WASM)", level: "Advanced" },
      { name: "Canvas & Mockup Editors", level: "Advanced" },
      { name: "Bloc & Reactive State", level: "Expert" },
      { name: "Clean Architecture", level: "Expert" }
    ]
  },
  {
    tier: "Backend & Database",
    badge: "Cloud & Data",
    skills: [
      { name: "Supabase", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "FastAPI (Python)", level: "Advanced" },
      { name: "Deno (Serverless)", level: "Working" },
      { name: "Row-Level Security (RLS)", level: "Advanced" },
      { name: "RESTful API Integration", level: "Advanced" },
      { name: "Realtime & WebSockets", level: "Advanced" },
      { name: "Auth & Multi-Tenancy", level: "Advanced" }
    ]
  },
  {
    tier: "Design, Media & Growth",
    badge: "Product Sensibility",
    skills: [
      { name: "Figma UI/UX & Design Systems", level: "Advanced" },
      { name: "Graphic Design & Visuals", level: "Advanced" },
      { name: "Video Editing (DaVinci)", level: "Working" },
      { name: "Google Digital Marketing", level: "Certified" },
      { name: "Local Hotspot Sockets / P2P", level: "Advanced" },
      { name: "Git Version Control", level: "Advanced" }
    ]
  }
];

export const experienceTimeline = [
  {
    period: "2024 - Present",
    role: "Full-Stack Product Engineer",
    company: "Independent Product Development",
    description: "Architecting and engineering complete SaaS platforms, including a multi-tenant link-in-bio storefront builder for social media merchants using Next.js, Supabase, PostgreSQL, and Tailwind CSS with custom order collection workflows."
  },
  {
    period: "2023 - 2024",
    role: "WebAssembly & Systems Engineer",
    company: "Print-on-Demand Platform Project",
    description: "Engineered a B2B2C e-commerce platform featuring high-performance browser design tools compiled with Flutter WebAssembly (WASM) for interactive canvas mockups, integrated with a Next.js customer storefront and Supabase backend."
  },
  {
    period: "2022 - 2023",
    role: "Cross-Platform Mobile Developer",
    company: "Independent Software Projects",
    description: "Developed native-grade Flutter mobile applications, including an offline peer-to-peer screen sharing tool using local Wi-Fi hotspot TCP/UDP socket communication and an integrated video creator teleprompter."
  }
];

export const projects = allProjects;

