/**
 * Project: B-Insta — Iraqi Link-in-Bio COD Storefront Platform
 * Production Full-Stack SaaS Project
 */

export default {
  id: "b-insta",
  title: "B-Insta",
  tagline: "Iraqi Link-in-Bio COD Storefront Platform",
  category: "Full-Stack",
  order: 2,
  featured: true,
  flagship: false,
  mockup: "dual",

  description: "A multi-tenant SaaS platform empowering Iraqi Instagram merchants with mobile-first link-in-bio storefronts, frictionless Cash-on-Delivery (COD) checkout, and courier logistics automation.",

  image: "/projects/b-insta-web.png",
  secondaryImage: "/projects/b-insta-mobile.jpg",
  logo: "/projects/b-insta-logo.png",

  media: [
    {
      type: "image",
      url: "/projects/b-insta-web.png",
      caption: "B-Insta Web Landing Page — Responsive Iraqi Social Commerce Storefront",
      frame: "laptop"
    },
    {
      type: "image",
      url: "/projects/b-insta-mobile.jpg",
      caption: "B-Insta Mobile Experience — Native-Feel COD Checkout & Dark Mode",
      frame: "phone"
    },
    {
      type: "video",
      url: "https://www.youtube.com/watch?v=4DDIz_h1LQc",
      caption: "Merchant Dashboard & Landing Page Walkthrough (2m)"
    },
    {
      type: "video",
      url: "https://www.youtube.com/watch?v=-gXPxH6qgHU",
      caption: "Buyer Checkout & WhatsApp Verification Flow (1m)"
    }
  ],

  tech: [
    "Next.js 16",
    "TypeScript",
    "Supabase PostgreSQL",
    "Tailwind CSS 4",
    "Upstash Redis",
    "Zod 4",
    "next-intl",
    "Vitest",
    "Playwright",
    "Vercel"
  ],

  systemArchitecture: "Next.js 16 App Router (Server Actions) → Supabase PostgreSQL (RLS & RPCs) + Upstash Redis (Sliding Limiter) → WhatsApp Soft Verification",

  githubUrl: "https://github.com/laithmh/b-insta-docs",
  repoNote: "Showcase & documentation repository. The original production codebase is private (source code access available upon request for technical review).",
  liveUrl: "https://b-insta.vercel.app/",
  demoVideoUrl: "https://www.youtube.com/watch?v=4DDIz_h1LQc",

  caseStudy: {
    overview: "Iraqi social commerce is booming, but operates on makeshift infrastructure: sellers across Baghdad, Erbil, and Basra conduct commerce via Instagram DMs, manual WhatsApp address copying, and ad-hoc courier coordination over phone calls. Orders get lost, fake buyers exhaust delivery slots, and logistics formats for local couriers (Mersal Zayouna, Hi-Express) require tedious manual re-entry. Existing global platforms (Shopify, WooCommerce) assume credit card processing, international couriers, and LTR layouts. B-Insta was engineered from the ground up as a multi-tenant SaaS platform tailored specifically to Iraqi commerce: zero-friction Cash-on-Delivery checkout without passwords, phone normalization for Asiacell/Zain/Korek prefixes, live governorate shipping rates, and WhatsApp soft verification.",
    keyFeatures: [
      "Public mobile-first storefront at /s/[slug] with instant local cart and zero-friction COD checkout without forced account registration",
      "Strict Iraqi phone validation (/^07[3-9]\\d{8}$/) and normalization via an IMMUTABLE PostgreSQL stored procedure",
      "Responsive merchant dashboard (/[locale]/dashboard) with Kanban order pipeline, Risk Shield trust scoring, and one-click courier CSV exports",
      "Super Admin governance portal (/(admin)/governance) managing merchant verification, global phone blacklists, and 18-governorate shipping rates",
      "Automated WhatsApp soft verification redirecting buyers to pre-filled merchant messages post-checkout",
      "Atomic coupon redemption implemented via Supabase RPC to prevent concurrent race conditions",
      "Sliding-window rate limiting on IPs and phone numbers powered by Upstash Redis with fail-closed security in production",
      "RTL-first trilingual localization (Arabic default, Kurdish Sorani, English) using next-intl and Tailwind logical properties (ms-, ps-)"
    ],
    architecture: {
      pattern: "Next.js 16 App Router with Server Actions (Zero public write API surface; end-to-end server-side Zod validation)",
      stateManagement: "Local Cart & React 19 Server/Client Components with URL query state",
      backend: "Supabase PostgreSQL with 16+ migrations, Row-Level Security on all tables, and atomic RPC stored procedures",
      auth: "Supabase Auth with cookie SSR sessions and immutable database-trigger app_metadata.role JWT protection"
    },
    challengesAndSolutions: [
      {
        challenge: "Iraqi Phone Number Normalization across erratic formats (0770, +964, 770, 964).",
        solution: "Engineered an IMMUTABLE PostgreSQL function normalize_iraq_phone() that canonicalizes inputs into standard 07XXXXXXXXX format, safe for database index and policy usage."
      },
      {
        challenge: "Preventing client-side cart price tampering on Cash-on-Delivery orders.",
        solution: "Enforced strict server-side price re-fetching in Server Actions before order insertion, re-validating live catalog prices and governorate shipping rates."
      },
      {
        challenge: "Coupon redemption race conditions under concurrent buyer checkouts.",
        solution: "Authored an atomic Supabase RPC transaction executing validation and usage increment in a single database step, eliminating concurrency exploits."
      },
      {
        challenge: "Enforcing multi-tenant object storage security in Supabase Storage.",
        solution: "Implemented path ownership verification inside Server Actions, validating that upload and delete paths begin with the authenticated user's storeId."
      },
      {
        challenge: "RTL layout consistency across Arabic, Kurdish Sorani, and English.",
        solution: "Eliminated directional margins/paddings across all components in favor of Tailwind CSS logical directional properties (ms-, me-, ps-, pe-)."
      }
    ],
    metrics: [
      "71 Unit & Integration Tests Passing (Vitest + React Testing Library)",
      "6 Playwright E2E Tests (Full Buyer Journey, Honeypots, Phone Validation)",
      "16 Database Migrations (Zero to Production Hardened)",
      "0 TypeScript 'any' types (Full Strict Mode Throughout)",
      "3 Supported Locales (Arabic, Kurdish Sorani, English via next-intl)",
      "18 Iraqi Governorates (Full Dynamic Shipping Rate Matrix)",
      "Production-Live on Vercel at b-insta.vercel.app"
    ]
  },

  ar: {
    title: "بي-إنستا (B-Insta)",
    tagline: "منصة واجهات المتاجر للتجارة الاجتماعية والدفع عند الاستلام في العراق",
    category: "Full-Stack",
    description: "منصة SaaS متعددة المستأجرين لتمكين تجار الإنستغرام في العراق من إطلاق متاجر سريعة متوافقة مع الهواتف، وإتمام طلبات الدفع عند الاستلام بسلاسة، وأتمتة تصدير كشوفات شركات التوصيل اللوجستية بصيغة CSV والتحقق المرن عبر الواتساب.",
    systemArchitecture: "Next.js 16 App Router (Server Actions) ← Supabase PostgreSQL (RLS & RPCs) + Upstash Redis (Sliding Limiter) ← التحقق المرن عبر الواتساب",
    repoNote: "مستودع العرض التقديمي والمستندات التقنية. الكود المصدري الأصلي للإنتاج خاص (متاح للمراجعة التقنية عند الطلب).",
    liveUrlLabel: "زيارة منصة بي-إنستا الحية",
    caseStudy: {
      overview: "تشهد التجارة الاجتماعية في العراق نمواً هائلاً، لكنها تعتمد على بنية تحتية بدائية: يدير البائعون في بغداد وأربيل والبصرة مبيعاتهم يدوياً عبر رسائل الإنستغرام، ونسخ العناوين إلى الواتساب، وتنسيق التوصيل هاتفياً. تتسبب هذه الطريقة بضياع الطلبات، وتزاحم المشترين الوهميين، وتكرار إدخال بيانات شركات التوصيل المحلية يدوياً. كما أن المنصات العالمية (Shopify, WooCommerce) تفترض الدفع بالبطاقات وشركات شحن دولية وتخطيطات من اليسار إلى اليمين. تم تطوير بي-إنستا خصيصاً للتجارة العراقية: إتمام فوري للدفع عند الاستلام دون الحاجة لكلمات سر، وتوحيد أرقام الهواتف تلقائياً لشبكات آسيا سيل وزين وكورك، وأجور شحن ديناميكية للمحافظات، والتحقق المرن عبر الواتساب.",
      keyFeatures: [
        "متجر عام مخصص للهواتف على الرابط /s/[slug] مع سلة شراء فورية وإتمام طلبات الدفع عند الاستلام دون إجبار العميل على التسجيل",
        "تحقق صارم من أرقام الهواتف العراقية (/^07[3-9]\\d{8}$/) وتوحيد صيغتها عبر دالة IMMUTABLE مخزنة داخل PostgreSQL",
        "لوحة تحكم متجاوبة للتجار (/[locale]/dashboard) بأسلوب كانبان مع مؤشر Risk Shield لكشف احتيال الطلبات، وتصدير كشوفات التوصيل بضغطة زر",
        "بوابة إدارة ورقابة عليا (/(admin)/governance) لتوثيق المتاجر، وإدارة القوائم السوداء لأرقام الهواتف، وأسعار شحن الـ 18 محافظة",
        "تحقق مرن مؤتمت عبر الواتساب يوجه المشتري لرسالة جاهزة للتأكيد مع التاجر فور إتمام الطلب",
        "تطبيق ذرّي لكوبونات الخصم عبر إجراء Supabase RPC لمنع استغلال العمليات المتزامنة",
        "تحديد معدل الطلبات (Rate Limiting) عبر Upstash Redis مع سياسة أمان صارمة (Fail-Closed) في بيئة الإنتاج",
        "دعم أصيل للكتابة من اليمين لليسار (RTL-First) لثلاث لغات (العربية افتراضياً، الكردية السورانية، والإنجليزية) باستخدام next-intl وخصائص Tailwind المنطقية (ms-, ps-)"
      ],
      architecture: {
        pattern: "Next.js 16 App Router مع Server Actions (واجهة سيرفر مغلقة بدون APIs كتابة مفتوحة؛ تحقق شامل بـ Zod)",
        stateManagement: "سلة تسوق محلية مع مكونات React 19 Client/Server وحالات الـ URL",
        backend: "Supabase PostgreSQL مع أكثر من 16 تترحيل، وسياسات أمان RLS على كافة الجداول، وإجراءات ذرية RPC",
        auth: "Supabase Auth مع جلسات الكوكيز SSR وحماية صلاحيات الـ JWT عبر محفزات قاعدة البيانات غير القابلة للتلاعب"
      },
      challengesAndSolutions: [
        {
          challenge: "توحيد صيغ أرقام الهواتف العراقية عبر مدخلات متباينة (0770, +964, 770, 964).",
          solution: "تطوير دالة IMMUTABLE داخل PostgreSQL باسم normalize_iraq_phone() لتوحيد المدخلات إلى الصيغة المعيارية 07XXXXXXXXX، بما يضمن سلامة الفهارس وسياسات الأمان."
        },
        {
          challenge: "منع التلاعب بأسعار سلة المشتريات من جهة العميل في طلبات الدفع عند الاستلام.",
          solution: "فرض إعادة جلب الأسعار بشكل صارم على السيرفر في الـ Server Actions قبل حفظ الطلب، وإعادة التحقق من الأسعار المباشرة وأجور شحن المحافظات."
        },
        {
          challenge: "تضارب استخدام كوبونات الخصم بالتزامن من عدة مشترين (Race Conditions).",
          solution: "بناء معاملة ذرية عبر إجراء Supabase RPC تنفذ التحقق من الكوبون وزيادة عداد الاستخدام في خطوة واحدة لا تقبل التجزئة داخل قاعدة البيانات."
        },
        {
          challenge: "فرض أمان عزل ملفات المتاجر في التخزين السحابي (Supabase Storage).",
          solution: "التحقق من ملكية المسارات البرمجية في الـ Server Actions والتأكد من أن مسارات الرفع والحذف تبدأ بمعرف storeId الخاص بالمستخدم الموثق."
        },
        {
          challenge: "اتساق اتجاه الواجهات (RTL) عبر العربية والكردية السورانية والإنجليزية.",
          solution: "إلغاء جميع الهوامش والمسافات الاتجاهية التقليدية واستبدالها بالخصائص المنطقية في Tailwind CSS مثل (ms-, me-, ps-, pe-)."
        }
      ],
      metrics: [
        "71 فحصاً للوحدات والتكامل ناجحاً (Vitest + React Testing Library)",
        "6 اختبارات E2E شاملة بـ Playwright (رحلة المشتري، حقول الاصطياد، توحيد الأرقام)",
        "16 ترحيلاً لقاعدة البيانات (من الصفر وحتى بنية الإنتاج المتينة)",
        "صفر أنواع 'any' في TypeScript (الوضع الصارم مطبق بالكامل)",
        "3 لغات مدعومة بالكامل (العربية، الكردية السورانية، والإنجليزية بـ next-intl)",
        "مصفوفة شحن حية وديناميكية لكافة محافظات العراق الـ 18",
        "منشور فعلياً على بيئة الإنتاج في Vercel على b-insta.vercel.app"
      ]
    }
  }
};
