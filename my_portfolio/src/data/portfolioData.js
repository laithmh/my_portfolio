import { allProjects, resolveProject, getProjects } from './projects/index.js';
export { resolveProject, getProjects };

export const personalInfoData = {
  en: {
    name: "LAITH MOHAMMED",
    role: "Full-Stack Product Engineer",
    tagline: "Architecting end-to-end digital products — from multi-tenant Next.js SaaS platforms and high-performance Flutter WebAssembly tools to robust Supabase & PostgreSQL backends.",
    email: "laithmhwork@gmail.com",
    location: "Available for Remote Product Engineering & Full-Stack Roles",
    resumeFile: "laith_mohammed_resume.pdf",
    coreFocus: "Next.js • Flutter / WASM • Supabase / PostgreSQL",
    aboutBio: `Independent Full-Stack Product Engineer with deep experience building production-grade digital products from zero to deployment. Rather than following tutorials, I learn by building complete, complex software systems: from multi-tenant SaaS platforms with Next.js and Supabase (PostgreSQL, RLS, Auth) to browser-based canvas editors powered by Flutter WebAssembly (WASM), and offline peer-to-peer networking utilities over local Wi-Fi hotspots. I thrive in autonomous environments where full-stack ownership, product intuition, and technical resourcefulness are required to ship real solutions.`,
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
  },
  ar: {
    name: "ليث محمد",
    role: "مهندس منتجات برمجية متكاملة (Full-Stack)",
    tagline: "هندسة وبناء منتجات رقمية متكاملة — من منصات SaaS متعددة المستأجرين بـ Next.js وأدوات Flutter WebAssembly فائقة الأداء، إلى بنى تحتية سحابية متينة بـ Supabase وPostgreSQL.",
    email: "laithmhwork@gmail.com",
    location: "متاح للعمل عن بُعد في هندسة المنتجات والفل ستاك",
    resumeFile: "laith_mohammed_resume.pdf",
    coreFocus: "Next.js • Flutter / WASM • Supabase / PostgreSQL",
    aboutBio: `مهندس منتجات برمجية مستقل يتمتع بخبرة عميقة في بناء وتطوير المنتجات الرقمية الجاهزة للإنتاج من نقطة الصفر وحتى الإطلاق الفعلي. أسلوبي في التعلم لا يعتمد على مجرد متابعة الشروحات، بل عبر بناء أنظمة برمجية معقدة ومتكاملة: من منصات SaaS متعددة المستأجرين باستخدام Next.js وSupabase (PostgreSQL, RLS, Auth)، إلى محررات التصميم المعتمدة على الـ Canvas عبر متصفح الويب والمدعومة بـ Flutter WebAssembly (WASM)، وصولاً إلى تطبيقات الشبكات المحلية المستقلة (P2P) عبر نقاط اتصال Wi-Fi المباشرة. أزدهر في بيئات العمل المستقلة التي تتطلب ملكية برمجية شاملة، وحساً عميقاً بتجربة المنتج، وحلولاً تقنية مبتكرة لإنجاز المشاريع الحقيقية.`,
    engineeringPillars: [
      {
        title: "ملكية شاملة للمنتج البرمجي",
        description: "تصميم مخططات قواعد البيانات العلائقية وسياسات الأمان الصارمة (RLS) وصولاً إلى واجهات الويب التفاعلية وتطبيقات الموبايل."
      },
      {
        title: "بيئات تشغيل فائقة الأداء وWebAssembly",
        description: "توظيف فلاتر المترجم إلى WebAssembly لتحقيق سلاسة فائقة بمعدل 60 إطاراً في الثانية لتحرير الرسوميات داخل المتصفح وشبكات المقابس المحلية."
      },
      {
        title: "حل المشكلات المعمارية باستقلالية",
        description: "تنفيذ ذاتي وموجّه — تحويل متطلبات المنتج المعقدة إلى معماريات برمجية فعالة وقابلة للتوسع دون الحاجة لفرق عمل ضخمة."
      },
      {
        title: "معمارية برمجية نقية وقابلة للصيانة",
        description: "هيكليات مفككة العناصر، وإدارة حالات تفاعلية يمكن التنبؤ بها، مع فصل صارم بين طبقات المنطق وقواعد البيانات والعرض."
      }
    ]
  }
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

export const skillTiersData = {
  en: [
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
  ],
  ar: [
    {
      tier: "تطبيقات الويب والـ SaaS",
      badge: "هندسة الويب",
      skills: [
        { name: "Next.js (App Router)", level: "متقدم" },
        { name: "React 19", level: "متقدم" },
        { name: "Tailwind CSS", level: "متقدم" },
        { name: "TypeScript / JavaScript", level: "متقدم" },
        { name: "SSR & Dynamic Routing", level: "متقدم" },
        { name: "Responsive UI", level: "خبير" }
      ]
    },
    {
      tier: "الأنظمة متعددة المنصات والرسوميات",
      badge: "الموبايل وWASM",
      skills: [
        { name: "Flutter", level: "خبير" },
        { name: "Dart", level: "خبير" },
        { name: "Flutter WebAssembly (WASM)", level: "متقدم" },
        { name: "Canvas & Mockup Editors", level: "متقدم" },
        { name: "Bloc & Reactive State", level: "خبير" },
        { name: "Clean Architecture", level: "خبير" }
      ]
    },
    {
      tier: "الباك إند وقواعد البيانات",
      badge: "السحابة والبيانات",
      skills: [
        { name: "Supabase", level: "خبير" },
        { name: "PostgreSQL", level: "متقدم" },
        { name: "FastAPI (Python)", level: "متقدم" },
        { name: "Deno (Serverless)", level: "عملي" },
        { name: "Row-Level Security (RLS)", level: "متقدم" },
        { name: "RESTful API Integration", level: "متقدم" },
        { name: "Realtime & WebSockets", level: "متقدم" },
        { name: "Auth & Multi-Tenancy", level: "متقدم" }
      ]
    },
    {
      tier: "التصميم والوسائط ونمو المنتجات",
      badge: "حس المنتج والتصميم",
      skills: [
        { name: "Figma UI/UX & Design Systems", level: "متقدم" },
        { name: "Graphic Design & Visuals", level: "متقدم" },
        { name: "Video Editing (DaVinci)", level: "عملي" },
        { name: "Google Digital Marketing", level: "معتمد" },
        { name: "Local Hotspot Sockets / P2P", level: "متقدم" },
        { name: "Git Version Control", level: "متقدم" }
      ]
    }
  ]
};

export const experienceTimelineData = {
  en: [
    {
      period: "2024 - Present",
      role: "Founding Full-Stack Engineer",
      company: "Solen (سولين) — POD & Creator Marketplace",
      description: "Architected Iraq's premier B2B2C Print-on-Demand marketplace using Next.js 16, TypeScript, Supabase PostgreSQL, and Node.js Sharp. Engineered an in-browser 2D studio, server-side 300 DPI transparent DTF export, localized Cash on Delivery (COD) across 18 governorates, and zero-float financial clearance verified by 445 automated tests."
    },
    {
      period: "2023 - 2024",
      role: "Full-Stack SaaS Engineer",
      company: "B-Insta — Iraqi Link-in-Bio Platform",
      description: "Engineered a multi-tenant link-in-bio storefront platform empowering Iraqi Instagram merchants with mobile-first storefronts, frictionless Cash on Delivery checkout, automated courier CSV formatting, and WhatsApp soft verification."
    },
    {
      period: "2022 - 2023",
      role: "Cross-Platform Systems Developer",
      company: "OffCast & Mobile Engineering",
      description: "Developed native-grade Flutter mobile applications, including an offline peer-to-peer screen sharing field monitor with sub-20ms latency over direct Wi-Fi hotspots, Android MediaCodec H.264 streaming, and on-device DSP voice detection."
    }
  ],
  ar: [
    {
      period: "2024 - حتى الآن",
      role: "مهندس فل ستاك مؤسس",
      company: "سولين (Solen) — منصة الطباعة عند الطلب وتجارة المبدعين",
      description: "هندسة وتطوير أول منصة B2B2C للطباعة عند الطلب وتجارة المبدعين في العراق باستخدام Next.js 16 وTypeScript وSupabase PostgreSQL وNode.js Sharp. بناء استوديو تصميم ثنائي الأبعاد داخل المتصفح، ومعالجة خلفية لتصدير ملفات DTF شفافة بدقة 300 DPI، ونظام دفع عند الاستلام (COD) مخصص لـ 18 محافظة، وتسوية مالية رقمية دقيقة خالية من أخطاء الفاصلة العائمة معتمدة بـ 445 فحصاً آلياً."
    },
    {
      period: "2023 - 2024",
      role: "مهندس فل ستاك لمنصات SaaS",
      company: "بي-إنستا (B-Insta) — منصة واجهات المتاجر للتجارة الاجتماعية",
      description: "تطوير منصة SaaS متعددة المستأجرين لروابط البايو والمتاجر الرقمية لتمكين تجار الإنستغرام في العراق من إطلاق متاجر سريعة متوافقة مع الهواتف، وإتمام طلبات الدفع عند الاستلام بسلاسة، وأتمتة تصدير كشوفات الشحن بصيغة CSV، والتحقق المرن عبر الواتساب."
    },
    {
      period: "2022 - 2023",
      role: "مطور نظم وتطبيقات متعددة المنصات",
      company: "أوف كاست (OffCast) — هندسة وتطوير تطبيقات الموبايل",
      description: "بناء وتطوير تطبيقات فلاتر بمستوى أداء أصيل، شملت نظام مراقبة ميداني لمشاركة الشاشة بدون إنترنت (P2P) بزمن استجابة فائق السرعة أقل من 20 مللي ثانية عبر نقاط Wi-Fi المباشرة، وبث فيديو مشفر عبر Android MediaCodec H.264، وخاصية التلقين الذكي عبر معالجة الإشارات الصوتية (DSP) على الجهاز."
    }
  ]
};

// Accessor helpers
export const getPersonalInfo = (lang = 'en') => personalInfoData[lang] || personalInfoData.en;
export const getSkillTiers = (lang = 'en') => skillTiersData[lang] || skillTiersData.en;
export const getExperienceTimeline = (lang = 'en') => experienceTimelineData[lang] || experienceTimelineData.en;

// Default exports for direct access and backwards compatibility
export const personalInfo = personalInfoData.en;
export const skillTiers = skillTiersData.en;
export const experienceTimeline = experienceTimelineData.en;
export const projects = allProjects;

export default {
  personalInfo,
  socialLinks,
  skillTiers,
  experienceTimeline,
  projects
};
