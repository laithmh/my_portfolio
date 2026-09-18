import React from 'react';

/**
 * Mobile Phone Device Frame
 * Clean, CSS-rendered smartphone mockup for showcasing Flutter mobile apps.
 */
export const PhoneFrame = ({ children, className = "" }) => {
  return (
    <div className={`relative mx-auto w-[270px] sm:w-[300px] h-[540px] sm:h-[600px] bg-[#1a202c] dark:bg-[#0d1117] rounded-[44px] p-3 shadow-2xl border-4 border-gray-300/40 dark:border-gray-700/80 ring-1 ring-black/10 transition-transform duration-300 hover:scale-[1.01] ${className}`}>
      {/* Outer Shell Details: Side Buttons */}
      <div className="absolute -left-[7px] top-[95px] w-[3px] h-[26px] bg-gray-400 dark:bg-gray-600 rounded-l" />
      <div className="absolute -left-[7px] top-[135px] w-[3px] h-[45px] bg-gray-400 dark:bg-gray-600 rounded-l" />
      <div className="absolute -left-[7px] top-[190px] w-[3px] h-[45px] bg-gray-400 dark:bg-gray-600 rounded-l" />
      <div className="absolute -right-[7px] top-[140px] w-[3px] h-[55px] bg-gray-400 dark:bg-gray-600 rounded-r" />

      {/* Screen Area */}
      <div className="relative w-full h-full bg-slate-900 rounded-[34px] overflow-hidden flex flex-col">
        {/* Dynamic Island / Top Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2.5 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111c2e] border border-blue-500/40 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-400/80" />
          </div>
        </div>

        {/* Screen Content */}
        <div className="w-full h-full overflow-hidden flex items-center justify-center">
          {children}
        </div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-30 pointer-events-none" />
      </div>
    </div>
  );
};

/**
 * Desktop Browser Window Frame
 * Clean, CSS-rendered browser window for showcasing Web applications and Full-Stack portals.
 */
export const BrowserFrame = ({ children, url = "https://app.laith.dev", title = "Full-Stack Web App", className = "" }) => {
  return (
    <div className={`w-full rounded-2xl overflow-hidden bg-[#1e2430] dark:bg-[#0e131b] shadow-2xl border border-gray-300/30 dark:border-gray-800 flex flex-col ${className}`}>
      {/* Browser Chrome Header */}
      <div className="px-4 py-3 bg-[#2a3344] dark:bg-[#161c26] border-b border-gray-300/20 dark:border-gray-800/80 flex items-center justify-between gap-3">
        {/* Traffic Light Window Controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm inline-block" />
        </div>

        {/* URL Bar */}
        <div className="flex-1 max-w-md mx-auto bg-black/25 dark:bg-black/40 rounded-lg px-3 py-1 text-center text-xs font-mono text-gray-300 truncate">
          {url}
        </div>

        {/* Title Label */}
        <span className="text-[11px] font-semibold text-gray-400 hidden sm:inline">
          {title}
        </span>
      </div>

      {/* Screen / Content Viewport */}
      <div className="w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-slate-950 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

/**
 * Laptop Device Frame
 * Aluminum-finish modern laptop chassis with camera notch, rounded display, and base stand.
 */
export const LaptopFrame = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-2xl mx-auto flex flex-col items-center ${className}`}>
      {/* Top Display Lid */}
      <div className="w-full bg-[#1e2430] dark:bg-[#0d1117] rounded-t-2xl p-2 sm:p-2.5 shadow-2xl border-t-2 border-x-2 border-gray-400/40 dark:border-gray-700/60 relative">
        {/* Camera Dot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black border border-gray-600 flex items-center justify-center">
          <div className="w-0.5 h-0.5 rounded-full bg-blue-500/80" />
        </div>
        {/* Screen Bezel & Display */}
        <div className="w-full aspect-[16/10] bg-black rounded-lg overflow-hidden flex items-center justify-center relative shadow-inner">
          {children}
        </div>
      </div>
      {/* Laptop Base Deck */}
      <div className="w-[104%] sm:w-[106%] h-3 sm:h-3.5 bg-gradient-to-b from-[#8a94a6] to-[#5b6577] dark:from-[#2e3746] dark:to-[#171c24] rounded-b-xl shadow-xl relative flex justify-center border-t border-white/20">
        {/* Center Opening Notch */}
        <div className="w-14 sm:w-16 h-1 bg-[#1a202c] dark:bg-black rounded-b-sm opacity-60" />
      </div>
      {/* Bottom shadow */}
      <div className="w-[85%] h-2 bg-black/30 dark:bg-black/60 blur-md rounded-full mt-0.5" />
    </div>
  );
};

/**
 * Dual Device Mockup (Laptop + Foreground Smartphone)
 * The ultimate SaaS responsive showcase: desktop web view with floating mobile view.
 */
export const DualDeviceMockup = ({
  webContent,
  mobileContent,
  className = ""
}) => {
  return (
    <div className={`relative w-full max-w-xl mx-auto select-none py-2 ${className}`}>
      {/* Background: Laptop Display */}
      <div className="w-[92%] sm:w-[88%] ml-0">
        <LaptopFrame>
          {webContent}
        </LaptopFrame>
      </div>

      {/* Foreground: Floating Mobile Phone */}
      <div className="absolute -bottom-2 sm:bottom-0 right-0 w-[140px] sm:w-[165px] md:w-[185px] z-20 transition-transform duration-300 hover:scale-105 filter drop-shadow-2xl">
        <div className="relative bg-[#1a202c] dark:bg-[#0d1117] rounded-[28px] sm:rounded-[34px] p-1.5 sm:p-2 shadow-2xl border-2 border-gray-400/50 dark:border-gray-700/80 ring-2 ring-black/40">
          {/* Side button accents */}
          <div className="absolute -left-[4px] top-[40px] w-[2px] h-[14px] bg-gray-500 rounded-l" />
          <div className="absolute -left-[4px] top-[60px] w-[2px] h-[22px] bg-gray-500 rounded-l" />
          <div className="absolute -right-[4px] top-[50px] w-[2px] h-[26px] bg-gray-500 rounded-r" />

          {/* Screen */}
          <div className="relative w-full aspect-[9/19.5] bg-black rounded-[22px] sm:rounded-[26px] overflow-hidden flex flex-col shadow-inner">
            {/* Dynamic Island */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-3 bg-black rounded-full z-30 flex items-center justify-end px-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
            </div>

            {/* Mobile Viewport */}
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              {mobileContent}
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-white/40 rounded-full z-30 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Dual Phone Mockup (Side-by-Side Dark & Light Mode)
 * Tailored for displaying dual mobile themes (e.g. Dark Neumorphic & Light Neumorphic).
 */
export const DualPhoneMockup = ({
  darkContent,
  lightContent,
  darkLabel = "Dark Mode • 60 FPS Visualizer",
  lightLabel = "Light Mode • Neumorphic",
  className = ""
}) => {
  return (
    <div className={`relative w-full max-w-2xl mx-auto flex items-center justify-center gap-3 sm:gap-6 py-2 select-none ${className}`}>
      {/* Phone 1: Dark Mode Phone */}
      <div className="flex-1 max-w-[190px] sm:max-w-[240px] flex flex-col items-center group transition-transform duration-300 hover:scale-[1.02] hover:z-20">
        <div className="mb-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-gray-900/80 dark:bg-black/70 text-gray-300 border border-gray-700/60 shadow-sm flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
          <span className="truncate">{darkLabel}</span>
        </div>
        <div className="relative w-full bg-[#161a22] rounded-[30px] sm:rounded-[36px] p-1.5 sm:p-2 shadow-2xl border-2 border-gray-700/80 ring-2 ring-black/40">
          {/* Side buttons */}
          <div className="absolute -left-[4px] top-[50px] sm:top-[60px] w-[2px] h-[16px] sm:h-[20px] bg-gray-600 rounded-l" />
          <div className="absolute -left-[4px] top-[75px] sm:top-[90px] w-[2px] h-[24px] sm:h-[30px] bg-gray-600 rounded-l" />
          <div className="absolute -right-[4px] top-[65px] sm:top-[75px] w-[2px] h-[28px] sm:h-[35px] bg-gray-600 rounded-r" />

          {/* Screen */}
          <div className="relative w-full aspect-[9/19.5] bg-black rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col shadow-inner">
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              {darkContent}
            </div>
            {/* Subtle Home Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-white/30 rounded-full z-30 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Phone 2: Light Mode Phone */}
      <div className="flex-1 max-w-[190px] sm:max-w-[240px] flex flex-col items-center group transition-transform duration-300 hover:scale-[1.02] hover:z-20">
        <div className="mb-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-white/90 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 border border-gray-300/60 dark:border-gray-700/60 shadow-sm flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          <span className="truncate">{lightLabel}</span>
        </div>
        <div className="relative w-full bg-[#e8ecf2] dark:bg-[#202734] rounded-[30px] sm:rounded-[36px] p-1.5 sm:p-2 shadow-2xl border-2 border-gray-300/80 dark:border-gray-700/80 ring-2 ring-black/20">
          {/* Side buttons */}
          <div className="absolute -left-[4px] top-[50px] sm:top-[60px] w-[2px] h-[16px] sm:h-[20px] bg-gray-400 dark:bg-gray-600 rounded-l" />
          <div className="absolute -left-[4px] top-[75px] sm:top-[90px] w-[2px] h-[24px] sm:h-[30px] bg-gray-400 dark:bg-gray-600 rounded-l" />
          <div className="absolute -right-[4px] top-[65px] sm:top-[75px] w-[2px] h-[28px] sm:h-[35px] bg-gray-400 dark:bg-gray-600 rounded-r" />

          {/* Screen */}
          <div className="relative w-full aspect-[9/19.5] bg-[#eef2f7] dark:bg-[#12161f] rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col shadow-inner">
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              {lightContent}
            </div>
            {/* Subtle Home Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-black/20 dark:bg-white/30 rounded-full z-30 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};


