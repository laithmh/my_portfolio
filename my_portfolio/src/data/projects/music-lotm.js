/**
 * Project: MusicLotm — Offline-First Android Music Player & Custom DSP Visualizer
 * The developer's first ever Flutter project built from scratch.
 */

export default {
  id: "music-lotm",
  title: "MusicLotm",
  tagline: "First-Ever Flutter Project • Offline Android Music Player & Native DSP Visualizer",
  category: "Flutter",
  order: 4,
  featured: true,
  firstProject: true,
  firstProjectBadge: "First Ever Flutter Project",
  statusBadge: "First Project • Daily Driver",
  statusBadgeAr: "أول مشروع • استخدام يومي",
  mockup: "dual-phone",

  description: "My first ever Flutter project: a full-featured, offline-first Android music player built from the ground up — featuring a microphone-free 60 FPS audio visualizer via native ExoPlayer PCM tap, in-app ID3 tag editor, and a neumorphic design system across 11 screens.",

  image: "/projects/music-lotm-dark.jpg",
  secondaryImage: "/projects/music-lotm-light.jpg",
  logo: "/projects/music-lotm-logo.jpg",

  media: [
    {
      type: "video",
      url: "https://youtube.com/shorts/h-ZzELC8am0?feature=share",
      caption: "MusicLotm Video Showcase — 60 FPS Real-Time Audio Visualizer & Neumorphic Playback Controls"
    },
    {
      type: "image",
      url: "/projects/music-lotm-dark.jpg",
      caption: "MusicLotm Dual-Theme Showcase — Dark Mode (60 FPS Visualizer) & Light Mode (Soft Neumorphic)",
      frame: "dual-phone",
      mode: "Dual Comparison"
    },
    {
      type: "image",
      url: "/projects/music-lotm-dark.jpg",
      caption: "MusicLotm Dark Mode — 60 FPS Real-Time FFT Visualizer & Neumorphic Audio Controls",
      frame: "phone",
      mode: "Dark Neumorphic"
    },
    {
      type: "image",
      url: "/projects/music-lotm-light.jpg",
      caption: "MusicLotm Light Mode — Soft Neumorphic Surfaces & Waveform Scrubber",
      frame: "phone",
      mode: "Light Neumorphic"
    }
  ],

  tech: [
    "Flutter",
    "Dart",
    "GetX",
    "ExoPlayer (Android Native)",
    "just_audio (Custom Fork)",
    "audio_service",
    "Hive NoSQL",
    "Android MediaStore API",
    "Audio DSP / 32-Band FFT",
    "CustomPainter",
    "flutter_screenutil"
  ],

  systemArchitecture: "Flutter UI (ChangeNotifier / RepaintBoundary) → GetX Controllers → Forked just_audio (ExoPlayer Native PCM TeeAudioProcessor) → 32-Band FFT Stream → Dart DSP Pipeline → Hive NoSQL",

  githubUrl: "https://github.com/laithmh/MusicLotm",
  demoVideoUrl: "https://youtube.com/shorts/h-ZzELC8am0?feature=share",
  downloadUrl: "https://github.com/laithmh/MusicLotm/releases/tag/v1.2.0",
  downloadLabel: "Download Release APK (v1.2.0)",
  liveUrl: "https://github.com/laithmh/MusicLotm/releases/tag/v1.2.0",
  liveUrlLabel: "Download Release APK (v1.2.0)",
  repoNote: "First ever Flutter project: built from scratch without tutorials to master native Android audio APIs, low-level DSP, and 60 FPS rendering.",

  caseStudy: {
    heroStatement: "MusicLotm is a full-featured, offline-first Android music player I built from the ground up as my first Flutter project — shipping 1,200+ lines of controller logic, a custom native audio DSP pipeline, and a neumorphic design system across 11 screens.",
    overview: "When I started learning Flutter, I didn't want to build a simple to-do list. I wanted a challenging production-grade application that pushed me straight into real software engineering: native platform channels, audio DSP, high-frequency rendering performance, scoped storage constraints, and bespoke UI design. Modern music apps require streaming subscriptions, online sync, or intrusive microphone permissions just to show a visualizer. I built MusicLotm to operate 100% offline, treat audio metadata as user-editable, and deliver a fluid 60 FPS real-time visualizer without requesting microphone permissions.",
    keyFeatures: [
      "First Ever Flutter Project: Built independently from zero to a release-ready Android APK",
      "Automatic local library scanning with zero network or cloud dependency",
      "Background audio playback with lockscreen & notification media controls (audio_service)",
      "60 FPS real-time audio visualizer with 3 display modes and ZERO microphone permission required",
      "In-tree custom fork of just_audio patching ExoPlayer RenderersFactory to intercept decoded PCM audio",
      "Multi-stage Dart DSP pipeline (noise floor gating, gamma correction, spatial smoothing, ballistics)",
      "Persistent floating mini-player accessible across all navigation tabs and screen views",
      "In-app ID3 tag editor supporting 6 formats (MP3, FLAC, M4A, WAV, AAC, OGG) on Android 10+ scoped storage",
      "Sleep timer featuring perceptual volume fade-out before playback stop",
      "Custom playlist management, persistent favorites, multi-select, and atomic deletion",
      "Dual-mode (Dark & Light) neumorphic design language across 11 custom screens",
      "Crash-safe startup with graceful InitializationErrorApp fallback protection"
    ],
    architecture: {
      frameworkAndState: "Flutter & GetX for reactive state management, routing, and dependency injection",
      nativeAudioTap: "Custom fork of just_audio injecting a native Android ExoPlayer TeeAudioProcessor into decoded PCM stream",
      dspEngine: "32-Band FFT stream analyzed in Dart with noise floor gating, gamma correction, 5-point smoothing, and spectral-flux beat detection",
      renderingIsolation: "VisualizerNotifier (ChangeNotifier) driving an isolated RepaintBoundary CustomPaint to prevent widget tree jank",
      persistenceLayer: "Hive NoSQL with debounced writes, 5s playback position auto-save, and MediaStore URI track tracking",
      scopedStorage: "MediaStore API integration with a 5-step atomic file write workflow for Android 10+ (Q/R/S/T/U)"
    },
    challengesAndSolutions: [
      {
        challenge: "Microphone-Free Real-Time Audio Visualizer without Android Visualizer API microphone permission.",
        solution: "Android's standard Visualizer API requires RECORD_AUDIO permission, which is a dealbreaker for an offline player. I forked just_audio, deep-dived into ExoPlayer's Android source, and patched RenderersFactory to inject a TeeAudioProcessor directly into the decoded PCM buffer, pushing 32-band FFT data to Dart at 60 FPS with zero microphone access."
      },
      {
        challenge: "Visual static and jitter from raw FFT audio data.",
        solution: "Implemented a multi-stage DSP pipeline in Dart: noise floor gating to silence visual hiss, gamma correction for human perceptual tuning, 5-point spatial smoothing for Liquid mode, configurable attack/decay ballistics, and spectral-flux beat detection."
      },
      {
        challenge: "60 FPS visualizer updates causing UI jank and widget rebuild lag.",
        solution: "Naïve setState() or Obx() rebuilt the entire view 60 times per second. I implemented a ChangeNotifier-based isolation pattern with VisualizerNotifier driving only a RepaintBoundary-wrapped CustomPaint, keeping the surrounding widget tree completely static."
      },
      {
        challenge: "Writing ID3 tags on Android 10+ Scoped Storage without file corruption.",
        solution: "Engineered a 5-step workflow: read via URI → write to temp file → write ID3 tags → commit via MediaStore API → cleanup temp file, accompanied by filename sanitization and 0–100% progress feedback."
      },
      {
        challenge: "Playback state restoration across app terminations and library modifications.",
        solution: "Persisted playback position every 5s to Hive, tracking songs by immutable MediaStore URI instead of volatile indices, and validating saved positions against estimated duration on startup to prevent seeking past EOF."
      }
    ],
    metrics: [
      "First Ever Flutter Project: Solo Developed from Zero",
      "5,000+ Lines of Clean Dart Code",
      "11 Dedicated Screens & Views",
      "9 Reactive GetX Controllers",
      "17 Production Packages Integrated",
      "20+ Hive Persisted Keys & Configs",
      "6 Audio Formats Supported (MP3, FLAC, M4A, WAV, AAC, OGG)",
      "60 FPS Rock-Solid Visualizer Refresh Rate"
    ]
  },

  ar: {
    title: "ميوزك لوتم (MusicLotm)",
    tagline: "أول مشروع فلاتر • مشغل صوتيات أندرويد بدون إنترنت مع معالج رسومي حي (DSP)",
    category: "Flutter",
    firstProjectBadge: "أول مشروع فلاتر في مسيرتي",
    description: "أول مشروع فلاتر بنيته في مسيرتي: مشغل موسيقى أندرويد متكامل يعمل بدون إنترنت من الصفر — يتميز بمحلل رسومي حي للموجات الصوتية (Audio Visualizer) بسرعة 60 إطاراً في الثانية دون طلب إذن الميكروفون عبر اعتراض بث PCM الأصلي في ExoPlayer، ومحرر وسوم ID3 مدمج، وتصميم نيومورفيك عبر 11 شاشة.",
    systemArchitecture: "واجهة فلاتر (ChangeNotifier / RepaintBoundary) ← متحكمات GetX ← نسخة مخصصة من just_audio (اعتراض صوتيات PCM عبر ExoPlayer TeeAudioProcessor) ← تدفق 32-Band FFT ← معالجة صوتية بـ Dart ← قاعدة بيانات Hive NoSQL",
    downloadLabel: "تحميل ملف APK الإصدار (v1.2.0)",
    repoNote: "أول مشروع فلاتر: طوّرته من الصفر وبشكل مستقل دون شروحات جاهزة لإتقان التعامل مع واجهات أندرويد الأصلية، ومعالجة الصوتيات الرقمية، وعرض الرسوميات بمعدل 60 إطاراً.",
    caseStudy: {
      heroStatement: "ميوزك لوتم هو مشغل موسيقى متكامل للأندرويد صممته وبنيته بالكامل من الصفر كأول مشروع لي في فلاتر — متضمناً أكثر من 1,200 سطر من منطق التحكم، ومعالجة صوتية أصلية، وتصميماً نيومورفيك متقناً عبر 11 شاشة.",
      overview: "عندما بدأت بتعلم فلاتر، لم أرغب في بناء تطبيق قوائم مهام بسيط. أردت تطبيقاً حقيقياً يضعني في قلب التحديات الهندسية المعقدة: قنوات الاتصال بالأنظمة الأصلية (Platform Channels)، ومعالجة الإشارات الصوتية (DSP)، والأداء العالي لعرض الإطارات، وقيود التخزين في أندرويد الحديث. تفرض تطبيقات الموسيقى الحديثة اشتراكات أو أذونات ميكروفون مزعجة فقط لعرض راسم الموجات. بنيت MusicLotm ليعمل بدون إنترنت 100%، ويتيح للمستخدم تعديل بيانات الأغاني بالكامل، ويقدم محلل موجات صوتي فائق السلاسة (60 FPS) دون طلب إذن الميكروفون.",
      keyFeatures: [
        "أول مشروع فلاتر: طُوّر بشكل مستقل من الصفر وحتى إصدار ملف APK جاهز للاستخدام",
        "مسح تلقائي لمكتبة الموسيقى المحلية دون أي حاجة للإنترنت أو السحابة",
        "تشغيل الصوتيات في الخلفية مع أزرار تحكم على شاشة القفل والإشعارات (audio_service)",
        "راسم موجات صوتية حي بسرعة 60 إطاراً بـ 3 أنماط عرض وبدون طلب إذن الميكروفون نهائياً",
        "تعديل مصدري مخصص لمكتبة just_audio يتدخل في مشغل ExoPlayer لالتقاط صوتيات PCM غير المضغوطة",
        "خط معالجة صوتية بـ Dart (عزل الضوضاء، ضبط غاما، وتنعيم انسيابي للحركات)",
        "مشغل موسيقى مصغر عائم ودائم الظهور عبر كافة شاشات وقوائم التطبيق",
        "محرر وسوم ID3 مدمج يدعم 6 صيغ صوتية (MP3, FLAC, M4A, WAV, AAC, OGG) متوافق مع نظام التخزين المحمي في Android 10+",
        "مؤقت نوم ذكي يخفف مستوى الصوت تدريجياً وبشكل انسيابي قبل إيقاف التشغيل",
        "إدارة قوائم التشغيل، والمفضلة الدائمة، والتحديد المتعدد، والحذف الآمن",
        "نظام تصميم نيومورفيك مزدوج (داكن وفاتح) عبر 11 شاشة مخصصة",
        "بدء تشغيل آمن يحمي التطبيق من الانهيار عند حدوث أخطاء غير متوقعة"
      ],
      architecture: {
        frameworkAndState: "فلاتر وGetX لإدارة الحالة التفاعلية، والتنقل بين الصفحات، وحقن الاعتماديات",
        nativeAudioTap: "تعديل برمجي خاص لمكتبة just_audio يحقن TeeAudioProcessor في ExoPlayer لالتقاط تدفق الـ PCM",
        dspEngine: "تحليل تدفق 32-Band FFT في Dart مع كبح الضوضاء، وضبط غاما، وتنعيم مكاني خماسي النقاط",
        renderingIsolation: "فصل طبقة الرسم بـ VisualizerNotifier مع RepaintBoundary لمنع إعادة بناء شجرة العناصر",
        persistenceLayer: "قاعدة بيانات Hive NoSQL مع كتابة مؤجلة وحفظ تلقائي لموقع التشغيل كل 5 ثوانٍ",
        scopedStorage: "تكامل مع Android MediaStore API عبر مسار كتابة ذرّي من 5 خطوات متوافق مع Android 10+"
      },
      challengesAndSolutions: [
        {
          challenge: "بناء محلل موجات صوتي حي دون طلب إذن الميكروفون في أندرويد.",
          solution: "يتطلب Visualizer API التقليدي إذن RECORD_AUDIO وهو أمر غير مقبول لمشغل موسيقى محلي. قمت بتعديل just_audio والتعمق في كود ExoPlayer، وحقنت TeeAudioProcessor مباشرة في مخزن الـ PCM للحصول على ترددات FFT بمعدل 60 إطاراً دون استخدام الميكروفون."
        },
        {
          challenge: "التشويش والاهتزاز البصري الناتج عن بيانات FFT الخام.",
          solution: "بناء مسار معالجة إشارات (DSP) متعدد المراحل في Dart: كبح الضوضاء لإسكات التشويش الهادئ، وضبط غاما ليتطابق مع الإدراك البصري البشري، وتنعيم مكاني خماسي النقاط للحركة الانسيابية."
        },
        {
          challenge: "تحديثات راسم الموجات بمعدل 60 FPS تسبب بطء وثقل في واجهة المستخدم.",
          solution: "كان استخدام setState() التقليدي يعيد بناء الصفحة 60 مرة في الثانية. طبقت نمط عزل تفاعلي بـ VisualizerNotifier يحرك فقط طبقة RepaintBoundary CustomPaint، مع إبقاء بقية شجرة العناصر ثابتة تماماً."
        },
        {
          challenge: "حفظ وتعديل وسوم ID3 في نظام Scoped Storage في Android 10+ دون تلف الملفات.",
          solution: "هندسة دورة عمل من 5 خطوات: القراءة عبر الـ URI ← الكتابة لملف مؤقت ← حفظ الوسوم ← التثبيت عبر MediaStore API ← حذف الملف المؤقت، مع شريط تقدم دقيق من 0 إلى 100%."
        },
        {
          challenge: "استعادة حالة التشغيل وموقع الأغنية بدقة بعد إغلاق التطبيق أو تعديل الملفات.",
          solution: "حفظ موضع التشغيل كل 5 ثوانٍ في Hive مع تتبع الأغاني عبر معرفات الـ URI الثابتة بدلاً من الفهارس المتغيرة، والتحقق من المدة الكلية عند بدء التشغيل لتفادي تجاوز نهاية الملف."
        }
      ],
      metrics: [
        "أول مشروع فلاتر: طُوّر بشكل فردي ومستقل من الصفر",
        "أكثر من 5,000 سطر برمجي نقي ومتقن بلغة Dart",
        "11 شاشة وواجهة مخصصة",
        "9 متحكمات تفاعلية باستخدام GetX",
        "17 مكتبة برمجية جاهزة للإنتاج تم دمجها",
        "أكثر من 20 مفتاح وإعداد دائم في Hive NoSQL",
        "دعم 6 صيغ صوتية (MP3, FLAC, M4A, WAV, AAC, OGG)",
        "معدل تحديث ثابت ومستقر 60 إطاراً في الثانية"
      ]
    }
  }
};
