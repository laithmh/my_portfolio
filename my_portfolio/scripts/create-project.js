#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectNameArg = process.argv[2] || 'new-app';
const slug = projectNameArg
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const targetDir = path.resolve(__dirname, '../src/data/projects');
const targetFile = path.join(targetDir, `${slug}.js`);

if (fs.existsSync(targetFile)) {
  console.error(`\x1b[31mError: Project file already exists at:\x1b[0m\n${targetFile}`);
  process.exit(1);
}

const formattedTitle = projectNameArg
  .split(/[-_\s]+/)
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
  .join(' ');

const templateContent = `export default {
  id: "${slug}",
  title: "${formattedTitle}",
  tagline: "Brief one-line summary of what makes this app unique",
  category: "Flutter", // Options: "Flutter", "Web", "Design"
  order: 10,
  featured: false,

  description: "A comprehensive description of what this project accomplishes, the problems it solves, and the end-user value.",
  image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",

  media: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
      caption: "Primary View & Interface"
    }
    // To add a video walkthrough:
    // {
    //   type: "video",
    //   url: "https://www.youtube.com/watch?v=...", // or direct MP4 URL
    //   caption: "App Demonstration & State Flow"
    // }
  ],

  tech: ["Flutter", "Dart", "Bloc", "Firebase"],
  githubUrl: "https://github.com/laithmh",
  liveUrl: "",
  demoVideoUrl: "",

  caseStudy: {
    overview: "Detailed background about the client, problem statement, or project goal.",
    keyFeatures: [
      "User authentication & biometric login",
      "Real-time data synchronization",
      "Custom responsive design & animations"
    ],
    architecture: {
      pattern: "Clean Architecture / Feature-First",
      stateManagement: "Bloc / GetX",
      backend: "Firebase / Supabase / FastAPI",
      storage: "Local cache with cloud sync"
    },
    challengesAndSolutions: [
      {
        challenge: "Key engineering bottleneck or problem encountered.",
        solution: "How you resolved it using smart design, caching, or algorithmic optimization."
      }
    ]
  }
};
`;

fs.writeFileSync(targetFile, templateContent, 'utf-8');
console.log(`\x1b[32m✔ Project file created successfully!\x1b[0m`);
console.log(`File: \x1b[36m${targetFile}\x1b[0m`);
console.log(`Vite has automatically loaded this project. Open the file to customize details!`);
