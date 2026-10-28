/**
 * Project: Dukkani (دكّاني) — Offline-First Syrian POS & USD-Pegged Customer Debt Ledger
 * Production Commercial Mobile Architecture & FinTech Accounting System
 */

export default {
  id: "dukkani",
  title: "Dukkani",
  tagline: "Offline-First Syrian Retail POS & USD-Pegged Customer Debt Ledger",
  category: "Flutter",
  order: 2,
  featured: true,
  flagship: false,
  statusBadge: "Active in Production • Client in Syria",
  statusBadgeAr: "يعمل فعلياً • لعميل في سوريا",

  description: "A 100% offline-first commercial Point of Sale and inflation-hedged customer debt ledger designed for neighborhood grocery stores in Syria. Engineered with Flutter, strict BLoC architecture, and Drift SQLite, it features zero-floating-point Decimal multi-currency math, smart banknote denomination rounding, an append-only double-entry ledger with native SQLite immutability triggers, Ed25519 offline asymmetric licensing, and an elderly-friendly 'Salt & Pepper' monochrome design system.",

  mockup: "dual-phone",

  image: "/projects/dukkani-scanner.jpg",
  secondaryImage: "/projects/dukkani-ledger.jpg",
  logo: "/projects/dukkani-logo.svg",

  demoVideoUrl: "https://youtu.be/mReJN_5NNV0",

  media: [
    {
      type: "video",
      url: "https://youtu.be/mReJN_5NNV0",
      caption: "Dukkani Live Demo — High-Speed POS Checkout, Exchange Rate Pegging & Offline Debt Ledger"
    },
    {
      type: "image",
      url: "/projects/dukkani-scanner.jpg",
      caption: "Rapid Continuous Barcode Scanner & Instant Cash Checkout with Banknote Grid (10/25/50 SYP)",
      frame: "phone"
    },
    {
      type: "image",
      url: "/projects/dukkani-ledger.jpg",
      caption: "Append-Only Customer Debt Ledger ('الدفتر') with Pinned Exchange Rate Bar",
      frame: "phone"
    },
    {
      type: "image",
      url: "/projects/dukkani-rate-dialog.jpg",
      caption: "Live USD/SYP Exchange Rate Configuration & Physical Banknote Rounding Modal",
      frame: "phone"
    },
    {
      type: "image",
      url: "/projects/dukkani-licensing.jpg",
      caption: "100% Offline Ed25519 Asymmetric Hardware Licensing & Activation Screen",
      frame: "phone"
    }
  ],

  tech: [
    "Flutter 3",
    "Dart",
    "flutter_bloc",
    "Drift (SQLite WAL)",
    "Decimal Math",
    "Ed25519 Cryptography",
    "AES-256-GCM Backups",
    "Clean Architecture",
    "mobile_scanner",
    "Salt & Pepper Design System"
  ],

  systemArchitecture: "Flutter 3 ('Salt & Pepper' WCAG AAA UI) → Strict BLoC Layer (Debounced Events & Cart Rate Snapshots) → SyrianCurrencyEngine (Zero-Float Decimal & 10/25/50 SYP Banknote Grid) → Drift SQLite (WAL Mode, Atomic Transactions & 4 Native Immutability Triggers) + Offline Ed25519 Licensing",

  githubUrl: "https://github.com/laithmh/dukkani-docs",
  repoNote: "Showcase & technical documentation repository. The commercial production codebase and Ed25519 vendor keys are private (source code access available upon request for technical review).",

  caseStudy: {
    heroStatement: "Built and deployed in 2026 for a commercial retail client in Syria, Dukkani replaces error-prone paper debt notebooks with an inflation-protected append-only financial ledger and high-speed checkout system operating under zero-infrastructure guarantees.",
    overview: "Neighborhood grocery stores in Syria face an unprecedented triple squeeze: extreme currency volatility (wholesale procured in USD while daily retail cash checkout occurs in Syrian Pounds), post-redenomination banknote shortages (lack of small coins creating change gridlock), and zero infrastructure guarantees (rolling power cuts and unreliable internet). Crucially, merchants extend informal community credit recorded in physical paper notebooks ('الدفتر'), causing 20–40% capital erosion when local currency devaluates before repayment. Dukkani was architected to overcome these constraints: it operates 100% offline, stores all base values in arbitrary-precision Decimal USD, snaps cash checkout totals to physical banknote combinations, enforces financial ledger immutability via native SQLite triggers, and protects access via hardware-bound Ed25519 digital signatures. The app is actively deployed and used daily by a commercial store owner in Syria.",
    keyFeatures: [
      "Active Client Deployment (2026): Commissioned and daily-driven in production by a commercial grocery client in Syria",
      "Multi-Currency Engine & Global USD Peg: Products priced in Decimal USD; single-tap top-bar exchange rate immediately re-prices entire store",
      "Smart Banknote Rounding: 50-step cyclic algorithm snapping checkout totals to valid 10, 25, and 50 SYP notes while keeping line items exact",
      "Append-Only Debt Ledger ('الدفتر'): Customer balances aggregated dynamically (SUM(charges) - SUM(payments)) with double-entry compensating reversals",
      "Dual Debt Modes: USD-Pegged mode (hedges outstanding balance against inflation) and Fixed-SYP mode (for customers on fixed local salaries)",
      "4 Native SQLite Immutability Triggers: Database-level constraints aborting unauthorized updates or deletes on invoice and ledger records",
      "High-Speed Checkout: Continuous camera barcode scanner (UPC-A ↔ EAN-13), 4-digit quick codes, held carts (up to 3), and weight-by-cash calculator",
      "Elderly-Friendly 'Salt & Pepper' Design System: WCAG AAA 14.1:1 contrast, 56px/64px touch target floor, and RTL Arabic layout with Western numerals",
      "Zero-Cloud Cryptographic Licensing: Hardware-bound activation tokens signed via asymmetric Ed25519 with SQLite anti-clock-rollback tamper detection",
      "Authenticated Offline Backups: Encrypted .dbk archives using AES-256-GCM and PBKDF2-HMAC-SHA256 (15,000 iterations) with merchant PIN protection"
    ],
    architecture: {
      pattern: "Feature-First Clean Architecture (Presentation, Domain, and Data with strict inward dependency flow)",
      stateManagement: "flutter_bloc + equatable (Zero business logic in UI; debounced event transformers; cart rate snapshot isolation)",
      databaseLayer: "Drift SQLite in WAL journaling mode with atomic multi-table transactions and custom DecimalConverter",
      securityTriggers: "4 Native SQLite engine triggers (trg_ledger_no_delete, trg_ledger_no_update, trg_invoices_no_delete, trg_invoices_immutable_amounts)",
      licensingAndCrypto: "Offline Ed25519 asymmetric signatures + AES-256-GCM authenticated database backup encryption",
      accessibilityDesign: "'Salt & Pepper' monochrome system with strict 56px/64px touch target floors and 320px to 600dp+ responsive layouts"
    },
    challengesAndSolutions: [
      {
        challenge: "Eliminating floating-point rounding drift across multi-currency conversions and physical banknote limitations.",
        solution: "Strictly banned IEEE 754 floats (double) in favor of arbitrary-precision Decimal mapped to SQLite TEXT. Engineered a 50-step cyclic denomination grid algorithm that decomposes cash totals and snaps remainders to physically payable combinations of 10 and 25 SYP banknotes."
      },
      {
        challenge: "Preventing customer balance corruption without relying on vulnerable mutable balance columns.",
        solution: "Adopted double-entry append-only accounting where customer balances are calculated on-the-fly via SQL aggregation. Enforced this design by writing 4 native SQLite database triggers directly into the schema to permanently block update and delete operations on financial history."
      },
      {
        challenge: "Mid-checkout price confusion caused by live exchange rate fluctuations.",
        solution: "Designed immutable Cart Rate Snapshots that lock the active exchange rate into PosCartState upon creation, alerting the cashier with an optional one-tap refresh banner if the global market rate shifts mid-transaction."
      },
      {
        challenge: "Enforcing commercial software licensing in an offline environment without cloud verification servers.",
        solution: "Implemented asymmetric Ed25519 public-key cryptography tied to hardware device fingerprints and an anti-clock-rollback algorithm that cross-checks device time against SQLite transaction high-water marks."
      },
      {
        challenge: "High checkout error rates and cognitive friction for elderly shopkeepers on low-cost devices under harsh lighting.",
        solution: "Developed the 'Salt & Pepper' design system: pure white surfaces, #2B2B2B charcoal text (14.1:1 contrast ratio), 1.5px solid borders, zero drop shadows, and a mandatory 56px/64px touch target floor with automatic Eastern-to-Western Arabic digit normalization."
      }
    ],
    metrics: [
      "Active Daily Use by Commercial Retail Client in Syria (2026)",
      "44 Automated Test Suites Across Financial Math, DAOs, Blocs & UI",
      "0 Floating-Point Violations (100% Decimal Multi-Currency Math)",
      "4 Native SQLite Database Immutability Triggers Installed",
      "56px / 64px Ergonomic Touch Target Floor Enforced",
      "Sub-20s Multi-Item Rush Hour Customer Checkout",
      "100% Offline Independence (Zero Server / Cloud Dependencies)"
    ]
  },

  ar: {
    title: "دكّاني (Dukkani)",
    tagline: "نظام نقاط بيع تجاري ومحاسبة ديون محمي بالدولار يعمل أوفلاين 100% للبقاليات في سوريا",
    category: "Flutter",
    description: "نظام تجاري متكامل لنقاط البيع (POS) وإدارة المخزون ودفتر ديون العملاء المحمي من التضخم، صُمم خصيصاً للمتاجر والبقاليات في سوريا. طُوّر باستخدام Flutter ومعمارية BLoC الصارمة وقاعدة بيانات Drift SQLite، ويتميز بحسابات مالية دقيقة بأعداد عشرية خالية من أخطاء الفاصلة العائمة (Decimal)، وخوارزمية ذكية لتقريب الفئات النقدية السورية، وسجل ديون غير قابل للتعديل مدعوم بمحفزات SQLite الأصلية، وترخيص أوفلاين غير متماثل بـ Ed25519، ونظام تصميم 'الملح والفلفل' عالي التباين لكبار السن.",
    systemArchitecture: "واجهة فلاتر 3 (نظام الملح والفلفل بمعايير WCAG AAA) ← طبقة BLoC الصارمة (أحداث مؤجلة وتجميد سعر الصرف بالسلة) ← محرك العملة السورية (حسابات Decimal وتقريب الفئات النقدية 10/25/50 ل.س) ← قاعدة بيانات Drift SQLite (نمط WAL ومعاملات ذرية و4 محفزات حماية) + ترخيص أوفلاين بـ Ed25519",
    repoNote: "مستودع العرض التقديمي والمستندات التقنية. الكود المصدري التجاري للإنتاج ومفاتيح الترخيص خاصة (متاحة للمراجعة التقنية عند الطلب).",
    caseStudy: {
      heroStatement: "طُوّر ونُشر فعلياً في عام 2026 لعميل تجاري في سوريا، حيث يستبدل دكّاني دفاتر الديون الورقية المعرضة للضياع بسجل مالي إلحاقي محمي ضد التضخم ونظام كاشير فائق السرعة يعمل باستقلالية تامة عن الإنترنت والكهرباء.",
      overview: "تواجه البقاليات والمتاجر في سوريا تحدياً ثلاثياً مركباً: التذبذب الحاد في أسعار الصرف (شراء البضائع بالجملة بالدولار بينما يتم البيع بالليرة السورية)، ونقص الفئات النقدية الصغيرة بعد استبدال العملة مما يخلق أزمة فكة يومية، وغياب ضمانات البنية التحتية (انقطاع متكرر للكهرباء والإنترنت). كما يعتمد التجار على الائتمان العرفي وتسجيل الديون في دفاتر ورقية ('الدفتر')، مما يتسبب بخسارة 20–40% من القوة الشرائية للدين عند هبوط الليرة قبل السداد. صُمم دكّاني ليتفوق على هذه الظروف: يعمل بدون إنترنت 100%، ويحفظ جميع الأسعار المرجعية بـ Decimal USD، ويقرب فواتير الكاش لتطابق الفئات الورقية المتاحة، ويفرض مناعة القيود المحاسبية عبر محفزات SQLite الأصلية، ويحمي النظام بترخيص رقمي مشفر مرتبط بعتاد الجهاز عبر Ed25519. التطبيق مستخدم يومياً في بيئة الإنتاج من قبل عميل تجاري في سوريا.",
      keyFeatures: [
        "نظام حي يعمل في الإنتاج (2026): طُوّر لعميل تجاري في سوريا ويعتمد عليه يومياً في متجره",
        "محرك عملات وربط بالدولار: حفظ التكاليف بـ Decimal USD وإعادة تسعير رفوف المحل فورياً بضغطة واحدة من الشريط العلوي",
        "تقريب ذكي للفئات النقدية: خوارزمية حلقية من 50 خطوة تقرب الفاتورة لفئات (10 و25 و50 ل.س) مع حفظ دقة كل مادة",
        "دفتر ديون تراكمي غير قابل للتعديل: احتساب أرصدة العملاء لحظياً عبر تجميع القيود المحاسبية مع قيود عكسية للتسويات",
        "نمطان لديون العملاء: نمط محمي بالدولار (يحمي رأس مال التاجر من التضخم) ونمط مثبت بالليرة (لأصحاب الدخل المحدود)",
        "4 محفزات أمان أصلية في SQLite: قواعد داخلية تمنع مسح أو تعديل الفواتير وسجلات الديون لضمان النزاهة المحاسبية",
        "إتمام دفع فائق السرعة: قارئ باركود مستمر بالكاميرا (UPC-A ↔ EAN-13)، وأكواد سريعة، وتعليق حتى 3 فواتير، وحاسبة وزن بالمبلغ",
        "نظام تصميم 'الملح والفلفل' لكبار السن: تباين فائق 14.1:1، وحد أدنى 56px/64px لمساحات اللمس، وواجهة عربية مع أرقام إنجليزية",
        "ترخيص رقمي بدون إنترنت (Ed25519): تفعيل مشفر مرتبط بمعرف العتاد مع حماية ضد التلاعب بساعة النظام ومقارنة التواريخ",
        "نسخ احتياطي مشفر بالكامل: أرشيف .dbk محمي بتشفير AES-256-GCM واشتقاق مفاتيح بـ PBKDF2 (15,000 تكرار) مع رمز PIN"
      ],
      architecture: {
        pattern: "معمارية نقية مقسمة حسب الميزات (Feature-First Clean Architecture مع تدفق اتجاهي صارم للاعتماديات)",
        stateManagement: "flutter_bloc + equatable (واجهات عرض خالية من المنطق؛ تدفقات أحداث مؤجلة؛ تجميد سعر صرف السلة)",
        databaseLayer: "قاعدة بيانات Drift SQLite بنمط WAL مع معاملات ذرية ومحول أعداد عشرية DecimalConverter مخصص",
        securityTriggers: "4 محفزات أمان في محرك SQLite تمنع التلاعب بالسجلات المالية وحذف الفواتير الصادرة",
        licensingAndCrypto: "توقيع رقمي غير متماثل بـ Ed25519 وتشفير نسخ احتياطية معتمد بـ AES-256-GCM",
        accessibilityDesign: "نظام تصميم أحادي اللون خالي من الظلال بارتفاعات لمس 56px/64px وتكيف كامل من 320px إلى الأجهزة اللوحية"
      },
      challengesAndSolutions: [
        {
          challenge: "التخلص من أخطاء الفاصلة العائمة (Floating-Point Drift) ومواءمة الفواتير مع فئات العملة الورقية في سوريا.",
          solution: "حظر استخدام double وnum والاعتماد على Decimal وتخزينها كنص في SQLite. ابتكار خوارزمية تقريب حلقية تفرز بواقي المبالغ وتطابقها مع تشكيلات الأوراق النقدية الفعلية (10 و25 ليرة)."
        },
        {
          challenge: "منع تلف وتضارب أرصدة ديون العملاء دون استخدام حقل رصيد قابل للتعديل والخطأ.",
          solution: "تطبيق المحاسبة الإلحاقية المزدوجة حيث يتم احتساب الرصيد لحظياً عبر تجميع قيود الجدول، مع حماية البيانات بـ 4 محفزات أصلية في محرك SQLite تمنع التعديل أو الحذف المباشر وتفرض القيود العكسية."
        },
        {
          challenge: "ارتباك أسعار المواد وتغير مجاميع السلال المفتوحة عند تغير سعر الصرف أثناء تسوق الزبون.",
          solution: "ابتكار لقطة مجمدة لسعر الصرف (Cart Rate Snapshot) داخل حالة PosCartState تثبت السعر طوال فترة الشراء، مع شريط تنبيهي ذكي يتيح للكاشير تحديث الأسعار بضغطة زر إذا رغب بذلك."
        },
        {
          challenge: "فرض نظام ترخيص تجاري آمن ومحمي بدون الاعتماد على سيرفرات سحابية في بيئة منقطعة الإنترنت.",
          solution: "استخدام التوقيع الرقمي غير المتماثل Ed25519 لربط الترخيص ببصمة عتاد الجهاز، وتضمين فحص زمني ذكي يقارن ساعة النظام مع أعلى طابع زمني للمعاملات في SQLite لمنع تجاوز انتهاء الصلاحية بإرجاع الساعة."
        },
        {
          challenge: "ارتفاع نسبة أخطاء اللمس وصعوبة قراءة الشاشات للبقالين كبار السن تحت إضاءة الشمس الساطعة أو ضعف الإنارة.",
          solution: "بناء نظام 'الملح والفلفل' عالي التباين: أسطح ناصعة البياض، ونصوص فحمية (#2B2B2B) بنسبة تباين 14.1:1، وحدود صلبة 1.5px، وأزرار ضخمة بارتفاع لا يقل عن 56px و64px، وتوحيد إدخال الأرقام تلقائياً."
        }
      ],
      metrics: [
        "يعمل فعلياً في الإنتاج لعميل تجاري في سوريا (2026)",
        "44 حزمة فحص آلي متكاملة للعمليات الحسابية وقواعد البيانات والواجهات",
        "صفر أخطاء فاصلة عائمة (حسابات Decimal دقيقة لجميع العملات)",
        "4 محفزات أمان مدمجة على مستوى محرك قاعدة البيانات SQLite",
        "حد أدنى لمساحات اللمس 56px / 64px متوافق مع كبار السن",
        "إتمام عمليات الدفع متعددة المواد في أقل من 20 ثانية",
        "استقلالية تامة 100% عن السيرفرات والخدمات السحابية"
      ]
    }
  }
};
