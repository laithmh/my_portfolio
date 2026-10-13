/**
 * Project: Solen (سولين) — Iraq's Premier Print-on-Demand & Creator Commerce Marketplace
 * Production Full-Stack E-Commerce & Graphics Platform
 */

export default {
  id: "solen",
  title: "Solen",
  tagline: "Iraq's Premier B2B2C Print-on-Demand & Creator Commerce Marketplace",
  category: "Full-Stack",
  order: 1,
  featured: true,
  flagship: true,
  statusBadge: "Live • Pre-Launch",
  statusBadgeAr: "مشروع حي • ما قبل الإطلاق",
  mockup: "dual",

  description: "A turnkey B2B2C Print-on-Demand platform empowering Iraqi creators and streetwear brands to customize garments and launch branded storefronts with zero upfront capital — featuring an in-browser 2D design studio, server-side 300 DPI transparent DTF export, localized Cash on Delivery (COD) across all 18 governorates, and zero-float financial clearance.",

  image: "/projects/solen-web.png",
  secondaryImage: "/projects/solen-mobile.png",
  logo: "/projects/solen-logo.svg",

  media: [
    {
      type: "video",
      url: "https://youtube.com/shorts/7IVOmdp70ik",
      caption: "Solen Platform Walkthrough — In-Browser 2D Studio & Mobile Commerce Demo",
      aspectRatio: "9:16"
    },
    {
      type: "image",
      url: "/projects/solen-web.png",
      caption: "Solen Creator Dashboard — Streetwear Catalog & Real-Time IQD Profit Margins",
      frame: "laptop"
    },
    {
      type: "image",
      url: "/projects/solen-mobile.png",
      caption: "In-Browser 2D Garment Studio (Mobile) — Physical 32x45 cm Print Area, Gesture Transform & Real-Time DPI Gauge",
      frame: "phone"
    },
    {
      type: "image",
      url: "/projects/solen-web-full.png",
      caption: "Solen Live Platform Web View (solen-web.vercel.app) — Trilingual Arabic / Kurdish / English Support"
    }
  ],

  tech: [
    "Next.js 16 (App Router)",
    "React 19",
    "TypeScript",
    "Supabase PostgreSQL 15",
    "Tailwind CSS 4",
    "Node.js Sharp (300 DPI DTF)",
    "next-intl (Trilingual)",
    "Vitest (445 Tests)",
    "Playwright E2E",
    "Vercel"
  ],

  systemArchitecture: "Next.js 16 App Router (Server Actions) → HTML5 Canvas 2D Multiply Compositing + Node.js Sharp (300 DPI DTF) → Supabase PostgreSQL 15 (36 Migrations, RLS & Triggers) + T+3 Delivery Hold Clearance",

  githubUrl: "https://github.com/laithmh/solen-docs",
  repoNote: "Showcase & documentation repository. The production codebase is private (source code access available upon request for technical review).",
  liveUrl: "https://solen-web.vercel.app/",
  demoVideoUrl: "https://youtube.com/shorts/7IVOmdp70ik",

  caseStudy: {
    heroStatement: "Eliminating upfront inventory risk for Iraqi creators while delivering pixel-perfect 300 DPI manufacturing files to local print hubs.",
    overview: "In emerging markets like Iraq, thousands of content creators, digital artists, calligraphers, and boutique streetwear brands sell merchandise primarily through Instagram and TikTok DMs. This model forces creators to front millions of Dinars in capital for bulk inventory with zero demand guarantees, while navigating informal Cash on Delivery (COD) logistics (>85% of Iraqi transactions) where parcel return rates are rampant. Solen eliminates this friction entirely with a localized B2B2C Print-on-Demand platform: creators upload artwork into a gesture-driven 2D browser studio, set their markup in Iraqi Dinars (IQD), and instantly launch a trilingual storefront. When an order is placed, Solen handles 18-governorate COD fulfillment, generates 300 DPI transparent DTF print files for Baghdad/Erbil print hubs, and settles creator earnings via an automated T+3 post-delivery hold.",
    keyFeatures: [
      "Interactive 2D Creator Studio with live drag-and-drop, contain-fit UV coordinates, and dynamic DPI resolution advisory",
      "Decoupled dual-render engine: lightweight HTML5 Canvas fabric compositing (<15 KB JS) + server Sharp transparent 300 DPI DTF exports",
      "Immutable design snapshot guarantee (JSONB frozen by PostgreSQL trigger protect_design_snapshot post-checkout)",
      "Rigid order fulfillment state machine (pending → processing → printing → packaging → shipped → delivered)",
      "Zero-float financial ledger in IQD with T+3 delivery hold clearance and atomic payout RPCs (ZainCash, FIB, Qi Card)",
      "Industrial fulfillment Production Hub (/dashboard/production) with piece-code routing (e.g. BAG-042-XL) and printable packing slips",
      "Self-serve order tracking portal (/track) with hybrid mobile phone verification (+964)",
      "100% Trilingual localization parity (2,542 keys across Arabic RTL, Kurdish Sorani RTL, and English LTR)"
    ],
    architecture: {
      pattern: "Next.js 16 App Router with Server Actions (Zero public write API surface; end-to-end server-side Zod validation)",
      graphicsPipeline: "HTML5 Canvas 2D multiply compositing (client preview) + Node.js Sharp Lanczos3 300 DPI transparent DTF export (server)",
      backend: "Supabase PostgreSQL 15 (36 migrations, 25 tables, 50+ RPCs & triggers, strict Row-Level Security on all tables)",
      authAndSecurity: "Supabase Auth with cookie SSR sessions, role protection trigger (protect_profile_role), and shared Postgres rate limiters",
      financials: "Zero-Float integer arithmetic (bigint IQD) with automated T+3 post-delivery safety hold and Fee Model C calculation"
    },
    challengesAndSolutions: [
      {
        challenge: "Delivering realistic fabric previews on budget mobile devices without heavy 3D WebGL engine lag.",
        solution: "Engineered a dual-pipeline architecture: client-side 2D canvas multiply/source-in compositing for 60 FPS previews in under 15 KB JS, alongside a server-side Sharp pipeline that outputs clean, 300 DPI transparent DTF files for physical print machinery."
      },
      {
        challenge: "Protecting against Cash on Delivery (COD) fraud, post-order design edits, and race conditions.",
        solution: "Enforced database-level immutability using PostgreSQL triggers to freeze design_snapshot JSONB, coupled with distributed rate limiters and strict state machine transition validation."
      },
      {
        challenge: "Handling network aborts during multi-asset publishing across storage buckets and database rows.",
        solution: "Built a transactional client publishing hook (useStudioPublisher) tracking created storage paths and draft IDs, executing automated rollbacks if any stage fails."
      },
      {
        challenge: "Preventing floating-point currency drift across commissions, shipping rates, and designer payouts.",
        solution: "Standardized zero-float integer arithmetic across the entire stack, storing all amounts in Iraqi Dinars (IQD) as integer/bigint and calculating dynamic fees via PostgreSQL RPCs."
      }
    ],
    metrics: [
      "445 Automated Tests Passing (56 test suites in Vitest + Playwright)",
      "36 Sequential PostgreSQL Migrations (Full declarative schema)",
      "408 TypeScript / TSX Source Files (~71,000 LOC)",
      "Strict ≤400 lines/file ceiling & 0 dead-code errors (Knip verified)",
      "100% Trilingual Parity (2,542 keys across Arabic, Kurdish Sorani, and English)",
      "Live Production Deployment on Vercel at solen-web.vercel.app"
    ]
  },

  ar: {
    title: "سولين (Solen)",
    tagline: "أول منصة B2B2C للطباعة عند الطلب وتجارة المبدعين في العراق",
    category: "Full-Stack",
    description: "منصة متكاملة للطباعة عند الطلب (Print-on-Demand) تمكّن المبدعين ومصممي أزياء الشارع في العراق من تخصيص الملابس وإطلاق متاجرهم الخاصة دون أي رأس مال مسبق — تتميز باستوديو تصميم ثنائي الأبعاد يعمل بالكامل داخل المتصفح، وتصدير ملفات DTF شفافة بدقة 300 DPI من السيرفر، ونظام دفع عند الاستلام (COD) مخصص لـ 18 محافظة، وتسوية مالية بأعداد صحيحة خالية من أخطاء الفاصلة العائمة.",
    systemArchitecture: "Next.js 16 App Router (Server Actions) ← معالجة HTML5 Canvas 2D + تصدير Node.js Sharp (300 DPI DTF) ← Supabase PostgreSQL 15 (36 ترحيلاً وRLS ومحفزات) + حجز تسوية الأرباح التلقائي T+3",
    repoNote: "مستودع العرض التقديمي والمستندات التقنية. الكود المصدري للإنتاج خاص (متاح للمراجعة التقنية عند الطلب).",
    liveUrlLabel: "زيارة منصة سولين الحية",
    caseStudy: {
      heroStatement: "إلغاء مخاطر المخزون المالي المسبق لمبدعي العراق مع تزويد مطابع بغداد وأربيل بملفات تصنيع شفافة فائقة الدقة بدقة 300 DPI.",
      overview: "في الأسواق الناشئة كالعراق، يبيع آلاف صانعي المحتوى والفنانين والخطاطين منتجاتهم بشكل يدوي عبر رسائل Instagram وTikTok. يُجبر هذا النموذج المبدعين على رهن ملايين الدنانير لشراء مخزون مسبق دون أي ضمان للطلب، إلى جانب مواجهة عقبات الدفع عند الاستلام (أكثر من 85% من التعاملات) ونسب الطرود المرتجعة المرتفعة. تقضي منصة سولين على هذا الهدر عبر منصة متكاملة: يرفع المبدع أعماله الفنية في استوديو تفاعلي داخل المتصفح، ويحدد هامش ربحه بالدينار العراقي (IQD)، ويطلق متجره بثلاث لغات على الفور. وعند إتمام أي طلب، تتولى سولين إدارة الشحن والدفع عند الاستلام لـ 18 محافظة، وتوليد ملفات الطباعة الشفافة بدقة 300 DPI لمطابع الإنتاج، وتسوية مستحقات المصممين عبر نظام حجز ذكي لمدة 3 أيام بعد التسليم.",
      keyFeatures: [
        "استوديو تفاعلي 2D للمصممين يدعم السحب والإفلات، وإحداثيات UV للطباعة، ومؤشر تنبيه حي لجودة الـ DPI",
        "محرك معالجة ثنائي منفصل: معاينة سريعة عبر HTML5 Canvas (<15 KB JS) + تصدير احترافي شفاف بدقة 300 DPI عبر Sharp من السيرفر",
        "ضمان تجميد لقطة التصميم فور الطلب (JSONB مجمّد عبر محفز PostgreSQL protect_design_snapshot لمنع أي تعديل لاحق)",
        "آلة حالات صارمة لتتبع دورة حياة الطلبات (معلق ← قيد المعالجة ← طباعة ← تغليف ← مشحون ← مُسلّم)",
        "سجل محاسبي خالي من أخطاء الفاصلة العائمة بالدينار العراقي مع حجز تسوية T+3 بعد التسليم ودوال سحب مالي ذرية (ZainCash, FIB, Qi Card)",
        "مركز إنتاج وتشغيل صناعي للمطابع (/dashboard/production) مع نظام توجيه قطع الملابس (مثل BAG-042-XL) وبطاقات تغليف قابلة للطباعة",
        "بوابة تتبع طلبات ذاتية (/track) مع تحقق هجين برقم الهاتف العراقي (+964)",
        "تعريب وتوطين كامل لثلاث لغات (2,542 مفتاح ترجمة متطابق بين العربية والكردية السورانية والإنجليزية)"
      ],
      architecture: {
        pattern: "Next.js 16 App Router مع Server Actions (واجهة سيرفر مغلقة بدون APIs كتابة مفتوحة؛ وتحقق شامل بـ Zod)",
        graphicsPipeline: "معاينة Canvas 2D في المتصفح + تصدير Lanczos3 بدقة 300 DPI شفافة بـ Sharp على السيرفر",
        backend: "Supabase PostgreSQL 15 (36 ترحيلاً، 25 جدولاً، 50+ إجراء ومحفز، وسياسات RLS صارمة على جميع الجداول)",
        authAndSecurity: "Supabase Auth مع جلسات الكوكيز SSR، ومحفز لحماية الأدوار (protect_profile_role)، ومحددات معدل طلبات مشتركة",
        financials: "حسابات مالية بأعداد صحيحة بالكامل (bigint IQD) مع حجز تسوية T+3 وحساب عمولات بنموذج Fee Model C"
      },
      challengesAndSolutions: [
        {
          challenge: "عرض معاينات واقعية للأقمشة على هواتف الفئات المتوسطة والاقتصادية دون بطء محركات WebGL ثلاثية الأبعاد الثقيلة.",
          solution: "ابتكار معمارية معالجة ثنائية: معاينة سريعة عبر تقنيات دمج Canvas 2D multiply في المتصفح بسرعة 60 إطاراً في أقل من 15 كيلوبايت، بجانب خط معالجة Sharp على السيرفر يصدّر ملفات DTF طباعية شفافة ونقية بدقة 300 DPI."
        },
        {
          challenge: "الحماية من احتيال الدفع عند الاستلام (COD)، وتعديل التصاميم بعد إتمام الطلب، وتضارب العمليات المتزامنة.",
          solution: "فرض مناعة البيانات على مستوى قاعدة البيانات بتجميد حقل design_snapshot كـ JSONB غير قابل للتعديل بمحفز PostgreSQL، مع محددات معدل موزعة وتحقق صارم من انتقالات آلة الحالات."
        },
        {
          challenge: "التعامل مع انقطاع الشبكة أثناء نشر ملفات متعددة عبر سلات التخزين وصفحات قاعدة البيانات.",
          solution: "بناء خطاف نشر تفاعلي (useStudioPublisher) يتتبع المسارات المرفوعة ومسودات التصاميم، وينفذ تراجعاً آلياً فورياً (Rollback) في حال فشل أي مرحلة."
        },
        {
          challenge: "منع انزلاق الكسور العشرية في العملات (Floating-Point Drift) عبر العمولات، وأجور الشحن، ومستحقات المصممين.",
          solution: "توحيد العمليات الحسابية للأعداد الصحيحة عبر كامل النظام، وتخزين كافة المبالغ بالدينار العراقي (IQD) كـ integer/bigint، وحساب العمولات عبر إجراءات مخزنة (RPCs) داخل PostgreSQL."
        }
      ],
      metrics: [
        "445 فحصاً آلياً ناجحاً (56 حزمة اختبار في Vitest وPlaywright)",
        "36 ترحيلاً تسلسلياً في PostgreSQL (مخطط تصريحي متكامل)",
        "408 ملفاً مصدرياً بـ TypeScript / TSX (~71,000 سطر برمجي)",
        "معيار صارم ≤400 سطر لكل ملف وصفر أخطاء كود غير مستخدم (معتمد بـ Knip)",
        "تطابق ثلاثي اللغات 100% (2,542 مفتاحاً عبر العربية والكردية والإنجليزية)",
        "منشور فعلياً على بيئة الإنتاج في Vercel على solen-web.vercel.app"
      ]
    }
  }
};
