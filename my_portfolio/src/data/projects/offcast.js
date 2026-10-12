/**
 * Project: OffCast — Ultra-Low Latency Offline Director Monitor & Smart Teleprompter
 * Advanced Mobile Systems, Real-Time Media & Distributed Networking Project
 */

export default {
  id: "offcast",
  title: "OffCast",
  tagline: "Ultra-Low Latency Offline Director Monitor & Smart Teleprompter",
  category: "Flutter",
  order: 3,
  featured: true,
  flagship: false,
  mockup: "tablet-phone",

  description: "An offline peer-to-peer wireless field monitor and smart teleprompter that turns secondary Android tablets into director monitors with sub-20ms glass-to-glass latency over direct Wi-Fi Hotspots—featuring SDP playout delay munging, native Kotlin UDP relay, and on-device voice-activated teleprompter scrolling.",

  image: "/projects/offcast-tablet.jpg",
  secondaryImage: "/projects/offcast-phone.jpg",
  logo: "/projects/offcast-logo.png",

  media: [
    {
      type: "video",
      url: "https://youtube.com/shorts/Sbx0J19n6qA?feature=share",
      caption: "OffCast Live Demo — Ultra-Low Latency Wireless Viewfinder & Teleprompter in Action"
    },
    {
      type: "image",
      url: "/projects/offcast-tablet.jpg",
      caption: "OffCast Field Ecosystem — Director Tablet Receiver (Background) & Camera Phone Transmitter (Foreground)",
      frame: "tablet-phone",
      mode: "Dual Device"
    },
    {
      type: "image",
      url: "/projects/offcast-tablet.jpg",
      caption: "Director Monitor Screen (Tablet) — 4-Digit Pairing PIN, WebSocket Host Status & Base Station Mode",
      frame: "tablet",
      mode: "Receiver Mode"
    },
    {
      type: "image",
      url: "/projects/offcast-phone.jpg",
      caption: "Camera Viewfinder Transmitter (Phone) — Hardware H.264 Silicon Codec & Thermal Performance Presets",
      frame: "phone",
      mode: "Sender Mode"
    },
    {
      type: "image",
      url: "/projects/offcast-modes.jpg",
      caption: "OffCast Role Selection — Camera Transmitter vs. Director Monitor & Prompter",
      frame: "phone",
      mode: "Mode Selection"
    }
  ],

  tech: [
    "Flutter 3",
    "Dart",
    "Flutter BLoC",
    "WebRTC (SDP Munging)",
    "Kotlin",
    "Android MediaCodec (H.264)",
    "Android MediaProjection",
    "Shelf (WebSocket Signaling)",
    "UDP Broadcast Discovery",
    "Audio DSP (PCM-16 RMS VAD)",
    "CustomPainter",
    "Linux Thread Tuning (nice=-19)"
  ],

  systemArchitecture: "Camera Phone (MediaProjection + Hardware H.264 + SDP Playout Delay Munging) → Direct 5 GHz Wi-Fi Hotspot (UDP Beacon :8888 + Shelf WebSocket :8080) → Director Tablet (Native Kotlin UDP Relay [nice=-19, 2MB Buffer] + WebRTC Playout + Native VAD Teleprompter DSP)",

  githubUrl: "https://github.com/laithmh/offcast",
  downloadUrl: "https://github.com/laithmh/offcast/releases",
  downloadLabel: "Download Release APK (v1.0.0+1)",
  demoVideoUrl: "https://youtube.com/shorts/Sbx0J19n6qA?feature=share",

  caseStudy: {
    heroStatement: "OffCast transforms secondary Android tablets into zero-latency wireless director monitors and smart teleprompters—achieving <20ms glass-to-glass video latency over direct Wi-Fi Hotspots without cloud servers or external routers.",
    overview: "Filming solo with a smartphone's rear camera yields the highest visual quality (4K60, 10-bit HDR, ProRes), but leaves the creator blind to framing, focus, and eye horizons. Existing streaming apps lock the camera hardware exclusively, preventing creators from using their phone's native camera app and computational photography algorithms. Moreover, streaming unoptimized video while recording 4K causes severe thermal throttling and device shutdowns within minutes. OffCast was engineered from the ground up to solve these physical and systems constraints: it captures the viewfinder display non-intrusively via Android MediaProjection (leaving camera sensors 100% uncut), streams video over an offline 5 GHz SoftAP hotspot with sub-20ms glass-to-glass latency via WebRTC SDP playout munging, bypasses Android client-isolation via an in-process native Kotlin UDP relay, and drives a floating teleprompter using on-device Voice Activity Detection (VAD).",
    keyFeatures: [
      "Ultra-Low Latency Viewfinder (<20ms): Direct 5 GHz Wi-Fi transmission with zero-jitter WebRTC SDP playout delay munging (a=playout-delay:0 0)",
      "Unrestricted 4K Native Shooting: Leverages Android MediaProjection foreground service, keeping native camera sensors 100% free for 4K 60FPS / 10-bit HDR",
      "Silicon Thermal Optimization: Hardware H.264 Baseline encoding capped at 30 FPS maintains transmitter temperatures under 38°C for 30+ minute takes",
      "Smart VAD Teleprompter: On-device native Kotlin DSP (PCM-16 RMS energy) automatically scrolls scripts while speaking and pauses during natural pauses",
      "Zero-Config Offline Discovery: UDP subnet broadcasts on port 8888 with an embedded Shelf HTTP/WebSocket signaling server eliminate router/cloud dependencies",
      "Native In-Process UDP Relay: Overcomes Android SoftAP client isolation using a dedicated high-priority native Linux thread (nice = -19) and 2MB socket buffers",
      "Social Framing GPU Safe Zones: 9:16 Shorts/Reels markers and 3x3 cinematic rule-of-thirds composition grids rendered natively on tablet GPU via CustomPainter (0% phone CPU)",
      "Pre-Shared PIN (PSP) Protection: 4-digit pairing authentication with sliding-window anti-tampering IP lockout (5 attempts / 30s threshold)"
    ],
    architecture: {
      pattern: "Clean Reactive Systems Architecture (Signaling Layer, WebRTC Peer Engine, BLoC State Management, Native Kotlin System Bridges)",
      stateManagement: "Flutter BLoC for deterministic lifecycle transitions (Idle → Discovering → Connecting → Streaming → Reconnecting)",
      backend: "Embedded Shelf HTTP & WebSocket Signaling Server hosted directly on the receiver tablet with 401 upgrade auth gating",
      auth: "Two-tier Pre-Shared PIN (PSP) verification with sliding-window IP rate limiting"
    },
    challengesAndSolutions: [
      {
        challenge: "Eliminating WebRTC's default 100–250ms adaptive jitter buffer in a low-ping local hotspot environment.",
        solution: "Injected the WebRTC extension a=playout-delay:0 0 directly into the Session Description Protocol (SDP) media lines, instructing the receiver's hardware decoder to immediately render incoming RTP video packets without buffering."
      },
      {
        challenge: "Android SoftAP packet isolation dropping peer-to-peer UDP packets between tethered hotspot clients.",
        solution: "Engineered NativeUdpRelay.kt running on a high-priority native Linux thread (nice = -19, THREAD_PRIORITY_URGENT_AUDIO) with a 2MB kernel socket buffer to act as an in-process datagram loopback forwarder with zero garbage collection overhead."
      },
      {
        challenge: "Preventing mobile camera sensor conflicts that disable the phone's native camera app and stabilization.",
        solution: "Used Android's MediaProjection foreground service to mirror the virtual display rather than acquiring camera hardware locks, allowing creators to shoot in native 4K 60FPS / HDR with full manufacturer optical image stabilization."
      },
      {
        challenge: "Smartphone thermal throttling and shutdown during simultaneous 4K recording and video transmission.",
        solution: "Enforced hardware-accelerated H.264 Constrained Baseline encoding on Qualcomm and MediaTek silicon and capped display capture to steady 30 FPS, slashing encoder load by 50% and keeping device temperatures under 40°C."
      },
      {
        challenge: "Smooth, hands-free teleprompter scrolling without cloud speech APIs or heavy ML models that drain battery.",
        solution: "Developed an on-device Voice Activity Detection (VAD) audio DSP engine in native Kotlin that samples the microphone at 16 kHz PCM-16, computes RMS energy in decibels, and applies a 750ms speech hangover window for natural pacing."
      }
    ],
    metrics: [
      "<20ms Glass-to-Glass Latency over direct 5 GHz Wi-Fi Hotspot",
      "<38°C Transmitter Thermal Ceiling under continuous 30+ minute 4K shoots",
      "Steady 30 FPS Video Pacing with minFrameRate: 24 floor",
      "50 Automated Unit & Widget Test Suites (100% pass rate)",
      "0 Linter Warnings under strict flutter_lints 6.0",
      "100% Offline Topology — zero cloud dependencies, zero external routers"
    ]
  },

  ar: {
    title: "أوف كاست (OffCast)",
    tagline: "نظام مراقبة إخراجي لاسلكي فائق السرعة وجهاز تلقين ذكي بدون إنترنت",
    category: "Flutter",
    description: "نظام مراقبة لاسلكي ميداني وجهاز تلقين نصوص ذكي يعمل بدون إنترنت (P2P)، يحوّل أجهزة التابلت بنظام أندرويد إلى شاشات مراقبة إخراجية بزمن استجابة أقل من 20 مللي ثانية عبر نقاط Wi-Fi Hotspot المباشرة — مدعوماً بتعديل معلمات SDP لتقليل التأخير، ومرحل UDP بلغة Kotlin الأصلية، وخاصية التمرير التلقائي الصوتي للنصوص.",
    systemArchitecture: "هاتف الكاميرا (MediaProjection + تشفير عتادي H.264 + تعديل تأخير SDP) ← نقطة اتصال Wi-Fi مباشرة 5 GHz (منارة UDP :8888 + مقابس Shelf :8080) ← تابلت المخرج (مرحل Kotlin UDP الأصلي [nice=-19, 2MB Buffer] + مشغل WebRTC + معالج DSP للتلقين الصوتي)",
    downloadLabel: "تحميل ملف APK الإصدار (v1.0.0+1)",
    caseStudy: {
      heroStatement: "يحوّل OffCast أجهزة التابلت إلى شاشات إخراج لاسلكية وأجهزة تلقين ذكية بزمن استجابة فائق السرعة <20ms عبر نقاط Wi-Fi المباشرة ودون الحاجة لأي خوادم سحابية أو راوترات خارجية.",
      overview: "يمنح التصوير الفردي بالكاميرا الخلفية للهاتف أعلى جودة بصرية ممكنة (4K60, 10-bit HDR)، لكنه يترك صانع المحتوى عاجزاً عن رؤية التأطير والتركيز وزوايا النظر. تقفل تطبيقات البث التقليدية عتاد الكاميرا حصرياً، مما يحرم صناع المحتوى من استخدام تطبيق الكاميرا الأصلي وخوارزميات المعالجة الصورية للهاتف، فضلاً عن ارتفاع درجات حرارة الأجهزة والإغلاق القسري عند تسجيل الـ 4K. تم ابتكار OffCast لتجاوز هذه القيود الهندسية والفيزيائية: التقاط شاشة المعاينة بسلاسة عبر خدمة Android MediaProjection دون المساس بمستشعرات الكاميرا، وبث الفيديو عبر نقطة SoftAP بتردد 5 GHz بزمن تأخير أقل من 20ms عبر تعديل معلمات WebRTC SDP، وتخطي عزل عملاء أندرويد عبر مرحل Kotlin UDP محلي في النواة، مع تلقين ذكي للنصوص عبر معالجة الإشارات الصوتية (VAD) على الجهاز.",
      keyFeatures: [
        "شاشة معاينة فائقة الاستجابة (<20ms): بث مباشر عبر Wi-Fi 5 GHz مع إلغاء تأخير الـ Jitter في WebRTC عبر وسم (a=playout-delay:0 0)",
        "تصوير 4K أصلي بلا قيود: استخدام خدمة MediaProjection يترك مستشعرات الكاميرا حرة بنسبة 100% للتصوير بدقة 4K 60FPS وHDR",
        "كبح حرارة المعالجات السيليكونية: ترميز H.264 عتادي مقيد بـ 30 إطاراً يحافظ على برودة الهاتف تحت 38 درجة مئوية لجلسات تصوير تتجاوز 30 دقيقة",
        "تلقين ذكي بنشاط الصوت (VAD): معالج DSP أصلي بلغة Kotlin يمرر النصوص تلقائياً أثناء الحديث ويتوقف عند الوقفات الطبيعية",
        "اكتشاف تلقائي بدون إنترنت أو إعدادات: بث UDP عبر المنفذ 8888 مع خادم Shelf مدمج يلغي الحاجة للإنترنت أو الراوترات",
        "مرحل UDP أصلي في الذاكرة: يتجاوز عزل أجهزة SoftAP في أندرويد عبر مسار لينكس عالي الأولوية (nice = -19) ومخزن مؤقت 2MB",
        "شبكات تأطير سينمائية على الـ GPU: خطوط أمان لمنصات Shorts/Reels وقواعد التثليث السينمائي تُعالج على معالج رسوميات التابلت (0% استهلاك لمعالج الهاتف)",
        "حماية برمز PIN مسبق: مصادقة اقتران برمز سري مكون من 4 أرقام مع قفل حماية ضد التخمين والتلاعب"
      ],
      architecture: {
        pattern: "معمارية تفاعلية نقية (طبقة الإشارات، محرك WebRTC، إدارة الحالة بـ BLoC، وجسور Kotlin الأصلية)",
        stateManagement: "Flutter BLoC لإدارة انتقالات الحالة المحددة (خامل ← اكتشاف ← اتصال ← بث ← إعادة اتصال)",
        backend: "خادم إشارات Shelf HTTP وWebSocket مدمج يعمل مباشرة على جهاز تابلت المستقبل",
        auth: "مصادقة ثنائية برمز PIN محلي ومحددات طلبات بالنافذة المنزلقة ضد محاولات الاختراق"
      },
      challengesAndSolutions: [
        {
          challenge: "إلغاء مخزن WebRTC المؤقت الافتراضي (100–250ms) في شبكات النقاط الساخنة المحلية منخفضة الـ Ping.",
          solution: "حقن امتداد WebRTC المباشر (a=playout-delay:0 0) في بروتوكول SDP، لتوجيه وحدة فك الترميز العتادية لعرض إطارات RTP فور وصولها دون أي تأخير."
        },
        {
          challenge: "عزل حزم الشبكة في أجهزة Android SoftAP الذي يمنع تبادل حزم UDP بين الأجهزة المتصلة.",
          solution: "تطوير NativeUdpRelay.kt يعمل على خيط لينكس أصلي عالي الأولوية (nice = -19) مع مخزن مؤقت 2MB ليعمل كممرر حلقي محلي في الذاكرة بصفر عبء على مجمع النفايات."
        },
        {
          challenge: "منع تضارب الوصول لمستشعرات الكاميرا الذي يعطل تطبيق كاميرا الهاتف والتثبيت البصري.",
          solution: "الاعتماد على خدمة Android MediaProjection لعكس الشاشة الافتراضية بدلاً من قفل مستشعرات الكاميرا، مما يتيح لصانع المحتوى التصوير بدقة 4K 60FPS / HDR مع كامل التثبيت البصري."
        },
        {
          challenge: "ارتفاع حرارة الهاتف وإغلاقه القسري أثناء التسجيل بدقة 4K والبث اللاسلكي المتزامن.",
          solution: "فرض ترميز H.264 عتادي على معالجات كوالكوم وميدياتك وضبط معدل التقاط الشاشة عند 30 إطاراً ثابتاً، مما خفض الحمل بنسبة 50% وحافظ على الحرارة دون 40 درجة مئوية."
        },
        {
          challenge: "تمرير نصوص التلقين بسلاسة دون لمس الشاشة ودون استهلاك البطارية بخدمات الذكاء الاصطناعي السحابية.",
          solution: "بناء محرك معالجة إشارات صوتية (VAD) أصلي بلغة Kotlin يحلل طاقة الصوت (RMS dB) بمعدل 16 kHz، ويطبق نافذة تعليق 750ms لحركة نصية طبيعية للغاية."
        }
      ],
      metrics: [
        "زمن تأخير فائق السرعة <20ms من العدسة للشاشة عبر نقطة اتصال 5 GHz",
        "سقف حراري تحت 38 درجة مئوية لجلسات تصوير 4K مستمرة تتجاوز 30 دقيقة",
        "معدل عرض ثابت 30 إطاراً في الثانية بحد أدنى 24 إطاراً",
        "50 حزمة اختبار آلي للوحدات والواجهات (نسبة نجاح 100%)",
        "صفر تحذيرات في فحص الجودة تحت معايير flutter_lints 6.0 الصارمة",
        "بنية تعمل بدون إنترنت 100% — دون أي اعتماديات سحابية أو راوترات خارجية"
      ]
    }
  }
};
