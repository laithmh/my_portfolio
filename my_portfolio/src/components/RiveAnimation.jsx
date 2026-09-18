import React, { useEffect, useRef, useState } from 'react';
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas';

const RiveAnimation = () => {
  const STATE_MACHINE_NAME = 'State Machine 1';
  const containerRef = useRef(null);
  const [isAwake, setIsAwake] = useState(false);
  
  // Safe base URL path handling for GitHub Pages & local dev
  const baseUrl = import.meta.env.BASE_URL || '/';
  const rivePath = `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}rive/6273-12187-a-moon.riv`;
  
  const { rive, RiveComponent } = useRive({
    src: rivePath,
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  // Actual Rive inputs for 6273-12187-a-moon.riv
  const isHoveredInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'Ishovered');
  const scaleInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'ScaleNum');

  // Sync state to Rive input
  const setAwakeState = (awake) => {
    setIsAwake(awake);
    if (isHoveredInput) {
      isHoveredInput.value = awake;
    }
  };

  // 1. Scroll-driven animation (Mobile & Desktop)
  // When the user scrolls the page, wake up the moon and move/react dynamically
  useEffect(() => {
    if (!isHoveredInput) return;

    let scrollTimeout = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      // Only react while within or near the hero section (top 800px)
      if (currentScrollY < 850 && delta > 3) {
        if (!isHoveredInput.value) {
          setAwakeState(true);
        }

        // Modulate ScaleNum dynamically with scroll speed if input exists
        if (scaleInput && scaleInput.value !== undefined) {
          const dynamicScale = Math.min(100, Math.max(0, delta * 2.5));
          scaleInput.value = dynamicScale;
        }

        // Reset sleep timer when scrolling pauses
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setAwakeState(false);
          if (scaleInput && scaleInput.value !== undefined) {
            scaleInput.value = 0;
          }
        }, 1200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isHoveredInput, scaleInput]);

  // 2. Mobile Ambient Life Cycle
  // On touch devices where mouse hover doesn't exist, wake up periodically
  useEffect(() => {
    if (!isHoveredInput) return;

    // Check if device is primarily touch/mobile
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) return;

    const ambientInterval = setInterval(() => {
      // Only trigger if in viewport and currently resting
      if (window.scrollY < 400 && !isHoveredInput.value) {
        setAwakeState(true);
        setTimeout(() => {
          setAwakeState(false);
        }, 2200);
      }
    }, 6000);

    return () => clearInterval(ambientInterval);
  }, [isHoveredInput]);

  // 3. User Interactions (Tap on mobile toggles, Hover on desktop)
  const handleMouseEnter = () => {
    setAwakeState(true);
  };

  const handleMouseLeave = () => {
    setAwakeState(false);
  };

  const handleTapToggle = (e) => {
    // Prevent default ghost clicks on touch
    if (e && e.type === 'touchstart') {
      e.stopPropagation();
    }
    setAwakeState(!isAwake);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center cursor-pointer select-none relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTapToggle}
      onClick={handleTapToggle}
      title="Tap or hover to interact with the moon"
      role="button"
      tabIndex={0}
      aria-label="Interactive animated moon"
    >
      <div className="w-[115%] h-[115%] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 active:scale-95">
        <RiveComponent className="w-full h-full pointer-events-none" />
      </div>
    </div>
  );
};

export default RiveAnimation;
