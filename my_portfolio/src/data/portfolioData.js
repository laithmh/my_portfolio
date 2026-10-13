import { allProjects, resolveProject, getProjects } from './projects/index.js';
export { resolveProject, getProjects };

export const personalInfoData = {
  en: {
    name: "LAITH MUHAMMED",
    role: "Full-Stack Developer (Flutter • Next.js • Supabase)",
    tagline: "Building complete digital products with end-to-end ownership — from cross-platform Flutter applications and WebAssembly tools to production Next.js & Supabase SaaS platforms.",
    email: "laithmhwork@gmail.com",
    location: "Available for Remote Roles & Freelance Projects (Baghdad, UTC+3)",
    resumeFile: "Laith_Muhammed_CV.pdf",
    coreFocus: "Flutter • Next.js • Supabase • Founder Mindset",
    aboutBio: `Self-taught Full-Stack Developer with 4 years of dedicated product building experience. Rather than building tutorial clones, I learn by engineering complete solutions for real challenges: from an offline Android music player (MusicLOTM) to a low-latency P2P director monitor to reframe my own video shoots (OffCast), and from a B2B2C Print-on-Demand marketplace (Solen) to a multi-tenant link-in-bio SaaS (B-Insta) to bootstrap its launch. I combine disciplined full-stack engineering with product intuition and content creation skills (DaVinci Resolve).`,
    engineeringPillars: [
      {
        title: "End-to-End Product Ownership",
        description: "Designing relational database schemas and Row-Level Security policies up to responsive web interfaces and mobile clients."
      },
      {
        title: "Real-World Problem Solving",
        description: "Building software that solves genuine personal and market friction, from solo video production monitors to localized Iraqi e-commerce."
      },
      {
        title: "Clean Architecture & Performance",
        description: "Separation of concerns (Data, Domain, Presentation), reactive state patterns (BLoC), and automated testing suites."
      },
      {
        title: "Product & Creative Sensibility",
        description: "Blending software development with Google-certified e-commerce growth strategies and DaVinci Resolve motion video design."
      }
    ]
  },
  ar: {
    name: "ليث محمد",
    role: "مطور فل ستاك وتطبيقات (Flutter • Next.js • Supabase)",
    tagline: "بناء وتطوير منتجات رقمية متكاملة بملكية برمجية شاملة — من تطبيقات فلاتر متعددة المنصات وأدوات WebAssembly إلى منصات سحابية بـ Next.js وSupabase.",
    email: "laithmhwork@gmail.com",
    location: "متاح للعمل عن بُعد والمشاريع المستقلة (بغداد، توقيت UTC+3)",
    resumeFile: "Laith_Muhammed_CV.pdf",
    coreFocus: "Flutter • Next.js • Supabase • عقلية ريادية",
    aboutBio: `مطور فل ستاك عصامي يتمتع بـ 4 سنوات من الخبرة العملية في بناء المنتجات الرقمية من الصفر. طريقتي في التعلم تنبع من حل مشكلات حقيقية وبناء أنظمة متكاملة: من مشغل موسيقى أوفلاين للأندرويد (MusicLOTM)، إلى نظام مراقبة وتلقين بدون إنترنت للتصوير الذاتي (OffCast)، وصولاً إلى منصة طباعة عند الطلب للمبدعين (Solen) ومنصة SaaS لمتاجر الروابط (B-Insta) لتمويل المشروع. أجمع بين الكفاءة البرمجية الشاملة، وعقلية بناء المنتجات، ومهارات صناعة المحتوى المرئي بـ DaVinci Resolve.`,
    engineeringPillars: [
      {
        title: "ملكية شاملة للمنتج البرمجي",
        description: "تصميم مخططات قواعد البيانات وسياسات الأمان (RLS) وصولاً إلى واجهات الويب التفاعلية وتطبيقات الموبايل."
      },
      {
        title: "حل المشكلات الواقعية",
        description: "بناء برمجيات تعالج احتكاكات وتحديات حقيقية، من مراقبة وتأطير التصوير الشخصي إلى تذليل عقبات التجارة الإلكترونية المحلية."
      },
      {
        title: "معمارية نقية وأداء عالٍ",
        description: "فصل طبقات الكود (البيانات، المنطق، العرض)، وإدارة حالات تفاعلية بـ BLoC، وكتابة فحوصات آلية شاملة."
      },
      {
        title: "حس المنتج والتصميم الإبداعي",
        description: "الدمج بين التطوير البرمجي واستراتيجيات التجارة الإلكترونية المعتمدة من Google وصناعة المحتوى والموشن جرافيك في DaVinci Resolve."
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
        { name: "Next.js (App Router)", level: "Strong" },
        { name: "React 19", level: "Strong" },
        { name: "Tailwind CSS", level: "Strong" },
        { name: "TypeScript / JavaScript", level: "Strong" },
        { name: "SSR & Dynamic Routing", level: "Strong" },
        { name: "Responsive UI", level: "Strong" }
      ]
    },
    {
      tier: "Cross-Platform & Mobile",
      badge: "Mobile & WASM",
      skills: [
        { name: "Flutter", level: "Strong" },
        { name: "Dart", level: "Strong" },
        { name: "BLoC & Reactive State", level: "Strong" },
        { name: "Clean Architecture", level: "Strong" },
        { name: "Flutter WebAssembly (WASM)", level: "Proficient" },
        { name: "Canvas & Mockup Editors", level: "Proficient" }
      ]
    },
    {
      tier: "Backend & Database",
      badge: "Cloud & APIs",
      skills: [
        { name: "Supabase", level: "Strong" },
        { name: "PostgreSQL", level: "Strong" },
        { name: "Row-Level Security (RLS)", level: "Strong" },
        { name: "RESTful API Integration", level: "Strong" },
        { name: "FastAPI (Python)", level: "Proficient" },
        { name: "WebSockets & Realtime", level: "Proficient" }
      ]
    },
    {
      tier: "Design, Media & Growth",
      badge: "Product & Creative",
      skills: [
        { name: "DaVinci Resolve (Editing & Motion)", level: "Proficient" },
        { name: "Cinematic Phone Filming", level: "Proficient" },
        { name: "Figma UI/UX & Design Systems", level: "Proficient" },
        { name: "Google Digital Marketing", level: "Certified" },
        { name: "Git Version Control", level: "Strong" },
        { name: "Vitest & Playwright Testing", level: "Proficient" }
      ]
    }
  ],
  ar: [
    {
      tier: "تطبيقات الويب والـ SaaS",
      badge: "هندسة الويب",
      skills: [
        { name: "Next.js (App Router)", level: "متمكن" },
        { name: "React 19", level: "متمكن" },
        { name: "Tailwind CSS", level: "متمكن" },
        { name: "TypeScript / JavaScript", level: "متمكن" },
        { name: "SSR & Dynamic Routing", level: "متمكن" },
        { name: "Responsive UI", level: "متمكن" }
      ]
    },
    {
      tier: "تطبيقات الموبايل ومتعددة المنصات",
      badge: "الموبايل وWASM",
      skills: [
        { name: "Flutter", level: "متمكن" },
        { name: "Dart", level: "متمكن" },
        { name: "BLoC & Reactive State", level: "متمكن" },
        { name: "Clean Architecture", level: "متمكن" },
        { name: "Flutter WebAssembly (WASM)", level: "متقدم" },
        { name: "Canvas & Mockup Editors", level: "متقدم" }
      ]
    },
    {
      tier: "الباك إند وقواعد البيانات",
      badge: "السحابة والبيانات",
      skills: [
        { name: "Supabase", level: "متمكن" },
        { name: "PostgreSQL", level: "متمكن" },
        { name: "Row-Level Security (RLS)", level: "متمكن" },
        { name: "RESTful API Integration", level: "متمكن" },
        { name: "FastAPI (Python)", level: "متقدم" },
        { name: "WebSockets & Realtime", level: "متقدم" }
      ]
    },
    {
      tier: "التصميم وصناعة المحتوى والنمو",
      badge: "حس المنتج والتصميم",
      skills: [
        { name: "DaVinci Resolve (مونتاج وموشن)", level: "متمرس" },
        { name: "تصوير سينمائي بالهاتف", level: "متمرس" },
        { name: "Figma UI/UX & Design Systems", level: "متمرس" },
        { name: "Google Digital Marketing", level: "معتمد" },
        { name: "Git Version Control", level: "متمكن" },
        { name: "Vitest & Playwright Testing", level: "متمرس" }
      ]
    }
  ]
};

export const experienceTimelineData = {
  en: [
    {
      period: "2024 - Present",
      role: "Founder & Full-Stack Developer",
      company: "Solen (سولين) — POD & Creator Marketplace",
      badge: "Active Startup • Pre-Launch",
      description: "Engineered Iraq's premier B2B2C Print-on-Demand marketplace. Started as a Flutter WASM mockup studio, then transitioned the web application to Next.js 16, TypeScript, Supabase PostgreSQL, and Node.js Sharp (300 DPI DTF export). Features localized Cash on Delivery (COD) across 18 governorates and verified by 445 automated tests."
    },
    {
      period: "2024 - 2025",
      role: "Founder & SaaS Developer",
      company: "B-Insta — Iraqi Link-in-Bio Platform",
      badge: "Self-Funded Venture • Pre-Launch",
      description: "Built a multi-tenant link-in-bio storefront platform to generate bootstrapping capital for Solen. Developed mobile-first storefronts, zero-friction COD checkout without password requirements, governorate shipping rates, and WhatsApp soft verification using Next.js 16, Supabase, and Redis."
    },
    {
      period: "2023 - 2024",
      role: "Independent Systems Developer",
      company: "OffCast — Wireless Field Monitor & Teleprompter",
      badge: "Tool Built for Personal Video Production",
      description: "Developed an offline P2P wireless director monitor and smart teleprompter to solve framing difficulties during solo camera recording. Engineered sub-20ms latency over direct Wi-Fi hotspots using Flutter BLoC, native Kotlin UDP relay, Android MediaCodec H.264, and on-device voice-activated scrolling."
    },
    {
      period: "2022 - 2023",
      role: "Independent Mobile Developer",
      company: "MusicLOTM — Offline Android Player",
      badge: "First-Ever Flutter Project • Daily Driver",
      description: "Built my first-ever mobile application from scratch for daily music playback. Engineered a 60 FPS microphone-free audio visualizer tapping native ExoPlayer PCM byte buffers, in-app ID3 tag editor, and local caching with Hive NoSQL."
    }
  ],
  ar: [
    {
      period: "2024 - حتى الآن",
      role: "المؤسس ومطور فل ستاك",
      company: "سولين (Solen) — منصة الطباعة عند الطلب وتجارة المبدعين",
      badge: "مشروع ريادي نشط • ما قبل الإطلاق",
      description: "تطوير أول منصة B2B2C للطباعة عند الطلب وتجارة المبدعين في العراق. بدأت كاستوديو تصميم بـ Flutter WASM، ثم تم تطوير نسخة الويب بـ Next.js 16 وTypeScript وSupabase PostgreSQL وNode.js Sharp لتصدير ملفات DTF بدقة 300 DPI، مع نظام دفع عند الاستلام لـ 18 محافظة و445 فحصاً آلياً."
    },
    {
      period: "2024 - 2025",
      role: "المؤسس ومطور أنظمة SaaS",
      company: "بي-إنستا (B-Insta) — منصة واجهات المتاجر للتجارة الاجتماعية",
      badge: "مشروع للتمويل الذاتي • ما قبل الإطلاق",
      description: "بناء منصة SaaS متعددة المستأجرين لروابط البايو والمتاجر الرقمية لتمويل إطلاق سولين ذاتياً. تشمل واجهات متاجر سريعة، وإتمام طلبات الدفع عند الاستلام بسلاسة بدون كلمات مرور، وحساب كلفة الشحن للمحافظات، والتحقق المرن عبر الواتساب."
    },
    {
      period: "2023 - 2024",
      role: "مطور نظم وتطبيقات مستقل",
      company: "أوف كاست (OffCast) — شاشة مراقبة وتلقين لاسلكية",
      badge: "أداة صُممت لحل مشكلة شخصية في التصوير",
      description: "تطوير نظام مراقبة ميداني وتلقين لاسلكي بدون إنترنت (P2P) لحل صعوبة تأطير الكاميرا أثناء تصوير الفيديوهات الفردية. حقق زمن استجابة أقل من 20ms عبر نقطة اتصال Wi-Fi مباشرة باستخدام Flutter BLoC ومقابس Kotlin وتشفير H.264 والتلقين الصوتي التلقائي."
    },
    {
      period: "2022 - 2023",
      role: "مطور تطبيقات مستقل",
      company: "ميوزك لوتيم (MusicLOTM) — مشغل موسيقى أوفلاين للأندرويد",
      badge: "أول مشروع فلاتر • استخدام يومي شخصي",
      description: "بناء أول تطبيق فلاتر من نقطة الصفر لاستخدامي اليومي. تضمن محرك مؤثرات بصرية للصوت بمعدل 60 إطاراً في الثانية عبر قراءة مباشرة لبيانات ExoPlayer PCM دون استخدام الميكروفون، ومحرر بيانات ID3، وتخزين محلي بـ Hive NoSQL."
    }
  ]
};

export const storyMilestonesData = {
  en: [
    {
      year: "2022",
      title: "The Beginning: MusicLOTM & Learning by Building",
      tagline: "Started with a personal problem: wanting a clean music player with a real-time visualizer.",
      content: "Instead of getting stuck in tutorial hell, I learned Flutter by building an app I genuinely wanted to use every single day. I taught myself GetX, audio streams, and dive deep into native Android ExoPlayer to tap into raw audio PCM bytes without requiring microphone permissions. It became my daily music player and proved that the fastest way to learn is to build for yourself.",
      icon: "music",
      tag: "First Milestone"
    },
    {
      year: "2022 - 2023",
      title: "The Filmmaker Friction: OffCast P2P Monitor",
      tagline: "Couldn't see myself while recording solo videos with a rear phone camera.",
      content: "When shooting cinematic videos by myself, I couldn't see the camera preview. Commercial wireless video transmitters cost hundreds of dollars and required internet. So I built OffCast: turning an Android tablet into a director field monitor with sub-20ms latency over a direct Wi-Fi hotspot without an internet connection. Along the way, I mastered state management by migrating to BLoC, tuned native Kotlin UDP relays, and added DSP voice-activated teleprompter scrolling.",
      icon: "video",
      tag: "Systems & Latency"
    },
    {
      year: "2024",
      title: "The Vision for Solen: Iraq's Print-on-Demand Marketplace",
      tagline: "Iraqi creators and streetwear brands had no infrastructure to print and sell on demand.",
      content: "I saw talented designers in Iraq who couldn't launch apparel brands because local print shops demanded massive minimum orders and upfront cash. I set out to build Solen as a turnkey platform. I started by engineering a high-performance 2D garment customizer using Flutter compiled to WebAssembly (WASM) so users could place and transform graphics inside the browser smoothly.",
      icon: "compass",
      tag: "Founder Vision"
    },
    {
      year: "2024 - 2025",
      title: "Strategic Pivot: Next.js & Google E-Commerce Track",
      tagline: "Completed Google Digital Marketing & recognized web SEO demands.",
      content: "After finishing Google's Professional Digital Marketing & E-commerce certificate track, I understood that e-commerce storefronts live and die by instant page load and search engine indexability. While Flutter Web WASM was great for the studio editor, consumer storefronts needed server-side rendering. I pivoted the Solen platform to Next.js 16 (App Router), React 19, Supabase PostgreSQL with Row-Level Security, and Sharp for 300 DPI transparent DTF export.",
      icon: "refresh",
      tag: "Architectural Pivot"
    },
    {
      year: "2024 - 2025",
      title: "B-Insta: Bootstrapping Capital for Solen",
      tagline: "Needed capital to fund Solen's operations and physical garment inventory.",
      content: "To fund Solen without outside capital, I identified an immediate pain point: Iraqi Instagram merchants were manually managing orders over DMs and losing deliveries. I engineered B-Insta, a multi-tenant link-in-bio SaaS with frictionless Cash on Delivery checkout, courier export formats, and WhatsApp soft verification. It is fully built and deployed, ready to onboard merchants.",
      icon: "store",
      tag: "Bootstrapping"
    },
    {
      year: "2025 - Present",
      title: "Content Creation: CapCut to DaVinci Resolve",
      tagline: "Great software needs compelling storytelling and visual marketing.",
      content: "Recognizing that building products is only half the battle, I decided to master content creation. I started with CapCut on mobile, then leveled up to DaVinci Resolve on desktop — mastering node-based color grading, audio synchronization, motion design, and cinematic filming using just my phone. This creative edge allows me to produce commercial-grade visual assets and demo videos for my own software.",
      icon: "film",
      tag: "Creative Edge"
    }
  ],
  ar: [
    {
      year: "2022",
      title: "البداية: تطبيق MusicLOTM والتعلم بالبناء العملي",
      tagline: "البداية من حاجة شخصية: الرغبة في مشغل موسيقى خاص مع مؤثرات بصرية حية.",
      content: "بدلاً من الاكتفاء بالدورات النظرية، قررت تعلم فلاتر عبر بناء تطبيق أحتاجه وأستخدمه يومياً. تعلمت إدارة الحالة GetX، وتدفقات الصوت، وتعمقت في نظام الأندرويد الأصلي عبر ExoPlayer للوصول المباشر إلى بيانات PCM الصوتية دون طلب إذن الميكروفون. أصبح تطبيقي اليومي وأثبت لي أن أفضل طريقة للتعلم هي بناء ما تحتاجه حقاً.",
      icon: "music",
      tag: "المحطة الأولى"
    },
    {
      year: "2022 - 2023",
      title: "تحدي التصوير الفردي: ابتكار OffCast للربط المباشر",
      tagline: "صعوبة رؤية وتأطير نفسي أثناء تسجيل الفيديوهات بالكاميرا الخلفية للهاتف.",
      content: "أثناء تصوير فيديوهاتي بشكل فردي، لم أكن قادراً على رؤية زاوية الكاميرا الخلفية. أجهزة البث اللاسلكي الاحترافية مكلفة للغاية وتحتاج إنترنت. فابتكرت OffCast: تحويل جهاز لوحي ثانوي إلى شاشة مخرج بزمن استجابة أقل من 20 مللي ثانية عبر نقطة اتصال Wi-Fi محلية بدون إنترنت. خلال المشروع، ارتقيت بمعمارية الكود وانتقلت إلى BLoC، وبرمجت مقابس UDP في Kotlin، وأضفت ملقناً صوتياً ذكياً.",
      icon: "video",
      tag: "الأنظمة والأداء"
    },
    {
      year: "2024",
      title: "رؤية منصة سولين: الطباعة عند الطلب في العراق",
      tagline: "افتقار المصممين والعلامات الشبابية في العراق إلى بنية تحتية لإنتاج وتوزيع الأزياء.",
      content: "لاحظت وجود مصممين عراقيين موهوبين يعجزون عن إطلاق علامات ملابس بسبب اشتراط المطابع لكميات ضخمة ورؤوس أموال مسبقة. بدأت مشروع سولين كمنصة متكاملة. بدأت بتطوير محرر تصميم تفاعلي ثنائي الأبعاد باستخدام Flutter Web المترجم لـ WebAssembly (WASM) لتمكين المستخدمين من تعديل التصاميم بسلاسة تامة داخل المتصفح.",
      icon: "compass",
      tag: "رؤية ريادية"
    },
    {
      year: "2024 - 2025",
      title: "التحول المعماري: الانتقال إلى Next.js وشهادة Google",
      tagline: "إتمام شهادة Google للتسويق الرقمي وإدراك متطلبات محركات البحث للويب.",
      content: "بعد إتمام مسار شهادة Google الاحترافية في التسويق والتجارة الإلكترونية، أدركت أن نجاح المتاجر الإلكترونية يعتمد على سرعة التحميل الأولية وقابلية الفهرسة في Google (SEO). بينما كان محرر فلاتر WASM ممتازاً، احتاجت المتاجر العامة إلى تصيير في الخادم (SSR). قمت بنقل منصة سولين إلى Next.js 16 وReact 19 وSupabase PostgreSQL مع أمان RLS ومكتبة Sharp لتصدير DTF بدقة 300 DPI.",
      icon: "refresh",
      tag: "نقلة معمارية"
    },
    {
      year: "2024 - 2025",
      title: "مشروع B-Insta: التمويل الذاتي لإطلاق سولين",
      tagline: "الحاجة إلى توليد دخل ذاتي لتمويل عمليات سولين وشراء عينات الأقمشة.",
      content: "لتوفير التمويل ذاتياً دون الاعتماد على مستثمرين، بنيت منصة B-Insta لحل مشكلة فورية لتجار الإنستغرام في العراق الذين يعانون من إدارة الطلبات يدوياً في الرسائل. صممت منصة SaaS متعددة المتاجر مع إنهاء سريع للطلبات بالدفع عند الاستلام وحساب الشحن لكل محافظة والتحقق عبر الواتساب. النظام مكتمل ومنشور وجاهز لاستقبال التجار.",
      icon: "store",
      tag: "تمويل ذاتي"
    },
    {
      year: "2025 - حتى الآن",
      title: "صناعة المحتوى: من CapCut إلى DaVinci Resolve",
      tagline: "البرمجيات الممتازة تحتاج إلى سرد قصصي وتسويق مرئي احترافي.",
      content: "إدراكاً مني بأن برمجة المنتج ليست سوى نصف المعركة، قررت احتراف صناعة المحتوى. بدأت بتطبيق CapCut على الهاتف، ثم ارتقيت إلى DaVinci Resolve على الحاسوب — وأتقنت تلوين الفيديو بنظام العقد (Nodes)، والمؤثرات الحركية (Motion Graphics)، والتصوير السينمائي بالهاتف. تمنحني هذه المهارة ميزة لإنتاج فيديوهات ترويجية تجارية وعروض تفاعلية لبرمجياتي بنفسي.",
      icon: "film",
      tag: "الجانب الإبداعي"
    }
  ]
};

export const defaultCreativeVideos = [];

// Accessor helpers
export const getPersonalInfo = (lang = 'en') => personalInfoData[lang] || personalInfoData.en;
export const getSkillTiers = (lang = 'en') => skillTiersData[lang] || skillTiersData.en;
export const getExperienceTimeline = (lang = 'en') => experienceTimelineData[lang] || experienceTimelineData.en;
export const getStoryMilestones = (lang = 'en') => storyMilestonesData[lang] || storyMilestonesData.en;

export const getCreativeVideos = () => {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('portfolio_creative_videos');
      if (stored !== null) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading stored creative videos', e);
    }
  }
  return defaultCreativeVideos;
};

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
  storyMilestonesData,
  defaultCreativeVideos,
  projects
};

