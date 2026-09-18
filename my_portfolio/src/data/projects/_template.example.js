/**
 * PROJECT TEMPLATE
 * 
 * To add a new project to your portfolio:
 * 1. Copy this file and name it `your-project-name.js` (e.g. `food-delivery.js`).
 * 2. Fill in the fields below.
 * 3. Save the file. Vite will automatically load it into your portfolio!
 */

export default {
  id: "my-project-slug",                // Unique URL-friendly ID
  title: "My Awesome Flutter App",
  tagline: "High-performance cross-platform delivery app",
  category: "Flutter",                 // "Flutter", "Web", "Design"
  order: 1,                            // Ordering priority
  featured: true,                      // Featured badge & priority on homepage

  // Quick summary shown on homepage project cards
  description: "A cross-platform mobile application providing real-time ordering, map tracking, and seamless payments.",

  // Primary image used on card thumbnail and hero
  image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",

  // Media Gallery for Modal (Images + Videos)
  media: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
      caption: "Main Storefront & Product Feed"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      caption: "Real-Time Cart & Checkout Flow"
    },
    // Optional Video Walkthrough:
    // {
    //   type: "video",
    //   url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // YouTube, Vimeo, or direct MP4 url
    //   caption: "App Walkthrough & State Management Demo"
    // }
  ],

  // Tech stack pills
  tech: ["Flutter", "Dart", "GetX", "FastAPI", "MySQL", "Stripe"],

  // External Action Links
  githubUrl: "https://github.com/laithmh",
  liveUrl: "https://play.google.com/store", // or website demo
  demoVideoUrl: "",                         // optional direct link to video

  // Recruiter Deep Dive / Case Study Sections
  caseStudy: {
    overview: "Built to solve high latency and inventory synchronization issues in multi-branch retail stores.",
    keyFeatures: [
      "Real-time inventory sync using WebSockets",
      "Offline-first architecture with local SQLite caching",
      "Integrated Stripe payments and one-click checkout",
      "Push notifications for order status updates via Firebase Cloud Messaging",
      "Dynamic theming (Light / Dark mode) with smooth micro-interactions"
    ],
    architecture: {
      pattern: "Clean Architecture (Presentation, Domain, Data layers)",
      stateManagement: "GetX for reactive state and dependency injection",
      backend: "FastAPI REST API with asynchronous PostgreSQL database connectors",
      auth: "JWT token authentication with biometric fingerprint fallback"
    },
    challengesAndSolutions: [
      {
        challenge: "Handling erratic network connectivity during checkout.",
        solution: "Implemented an optimistic queue that stores pending mutations locally and syncs with idempotent server APIs once connection resumes."
      }
    ]
  }
};
