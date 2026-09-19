/**
 * Project: OffCast — Ultra-Low Latency Offline Director Monitor & Smart Teleprompter
 * Advanced Mobile Systems, Real-Time Media & Distributed Networking Project
 */

export default {
  id: "offcast",
  title: "OffCast",
  tagline: "Ultra-Low Latency Offline Director Monitor & Smart Teleprompter",
  category: "Flutter",
  order: 2,
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
  }
};
