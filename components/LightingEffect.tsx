'use client';

import React, { useEffect, useRef, useState } from 'react';

interface LightingEffectProps {
  isDarkMode: boolean;
}

export const LightingEffect: React.FC<LightingEffectProps> = ({ isDarkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Interactive coordinate and physics refs
  const mouseRef = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500, y: 300 });
  const pos1 = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500, y: 300 });
  const pos2 = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500, y: 300 });
  const pos3 = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500, y: 300 });
  
  const scrollYRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const scrollVelocityRef = useRef(0);
  const scrollProgressRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(true);

  // DOM node direct style refs for maximum 120fps performance without React re-render thrashing
  const light1Ref = useRef<HTMLDivElement>(null);
  const light2Ref = useRef<HTMLDivElement>(null);
  const light3Ref = useRef<HTMLDivElement>(null);
  const scrollWaveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animFrameId: number;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      isHoveredRef.current = true;
      if ('touches' in e && e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      } else if ('clientX' in e) {
        mouseRef.current = {
          x: e.clientX,
          y: e.clientY,
        };
      }
    };

    const handlePointerDown = () => {
      isDraggingRef.current = true;
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(currentScrollY / docHeight, 0), 1) : 0;
      
      const delta = Math.abs(currentScrollY - lastScrollYRef.current);
      scrollVelocityRef.current = Math.min(scrollVelocityRef.current + delta * 0.15, 60);
      lastScrollYRef.current = currentScrollY;
      scrollYRef.current = currentScrollY;
      scrollProgressRef.current = progress;
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handlePointerDown, { passive: true });
    window.addEventListener('mouseup', handlePointerUp, { passive: true });
    window.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchend', handlePointerUp, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Physics animation loop
    const animate = () => {
      // Spring lerp equations
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;

      // Primary follower
      pos1.current.x += (targetX - pos1.current.x) * 0.12;
      pos1.current.y += (targetY - pos1.current.y) * 0.12;

      // Harmonic trail follower (slightly delayed)
      pos2.current.x += (pos1.current.x - pos2.current.x) * 0.07;
      pos2.current.y += (pos1.current.y - pos2.current.y) * 0.07;

      // Deep ambient follower (liquid inertia)
      pos3.current.x += (pos2.current.x - pos3.current.x) * 0.04;
      pos3.current.y += (pos2.current.y - pos3.current.y) * 0.04;

      // Decay scroll velocity gradually
      scrollVelocityRef.current *= 0.92;

      const velocity = scrollVelocityRef.current;
      const isDragging = isDraggingRef.current;
      const progress = scrollProgressRef.current;

      // Dynamic scale & brightness based on drag/scroll
      const boostScale = 1 + (velocity * 0.015) + (isDragging ? 0.35 : 0);
      const intensity = Math.min(1 + (velocity * 0.04) + (isDragging ? 0.6 : 0), 2.2);

      // Color Hue shift smoothly as user scrolls
      // Spectrum: 0 (Hero: Purple) -> 120 (Experience: Cyan) -> 220 (Projects: Emerald) -> 300 (Contact: Rose/Sunset)
      const dynamicHue = Math.round(progress * 240);

      // Apply transforms directly via style for zero React re-render overhead
      if (light1Ref.current) {
        const x = pos1.current.x;
        const y = pos1.current.y;
        light1Ref.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${boostScale})`;
        light1Ref.current.style.filter = `hue-rotate(${dynamicHue}deg) brightness(${intensity})`;
      }

      if (light2Ref.current) {
        const x = pos2.current.x;
        const y = pos2.current.y;
        light2Ref.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${boostScale * 1.2})`;
        light2Ref.current.style.filter = `hue-rotate(${dynamicHue + 45}deg) brightness(${intensity * 0.9})`;
      }

      if (light3Ref.current) {
        const x = pos3.current.x;
        const y = pos3.current.y;
        light3Ref.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${boostScale * 1.5})`;
        light3Ref.current.style.filter = `hue-rotate(${dynamicHue + 90}deg) brightness(${intensity * 0.8})`;
      }

      if (scrollWaveRef.current) {
        // Vertical ambient glow tracking page depth
        const waveY = progress * 100;
        scrollWaveRef.current.style.transform = `translateY(${waveY}%) scaleY(${1 + velocity * 0.02})`;
        scrollWaveRef.current.style.filter = `hue-rotate(${dynamicHue}deg)`;
      }

      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchend', handlePointerUp);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none transition-opacity duration-700"
    >
      {/* 1. Primary Interactive Cursor / Drag Lighting Flare */}
      <div
        ref={light1Ref}
        className={`absolute top-0 left-0 w-[420px] h-[420px] rounded-full blur-[85px] will-change-transform transition-opacity duration-500 ${
          isDarkMode
            ? 'opacity-40 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.7)_0%,rgba(59,130,246,0.4)_45%,transparent_75%)] mix-blend-screen'
            : 'opacity-25 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.5)_0%,rgba(236,72,153,0.3)_45%,transparent_75%)] mix-blend-multiply'
        }`}
      />

      {/* 2. Harmonic Fluid Trail Lighting (Secondary Aura) */}
      <div
        ref={light2Ref}
        className={`absolute top-0 left-0 w-[550px] h-[550px] rounded-full blur-[100px] will-change-transform transition-opacity duration-700 ${
          isDarkMode
            ? 'opacity-30 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.6)_0%,rgba(16,185,129,0.35)_45%,transparent_70%)] mix-blend-screen'
            : 'opacity-20 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.4)_0%,rgba(147,197,253,0.3)_45%,transparent_70%)] mix-blend-multiply'
        }`}
      />

      {/* 3. Deep Ambient Liquid Glow (Tertiary Mesh) */}
      <div
        ref={light3Ref}
        className={`absolute top-0 left-0 w-[700px] h-[700px] rounded-full blur-[130px] will-change-transform transition-opacity duration-1000 ${
          isDarkMode
            ? 'opacity-20 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.5)_0%,rgba(139,92,246,0.25)_50%,transparent_75%)] mix-blend-screen'
            : 'opacity-15 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.35)_0%,rgba(244,114,182,0.2)_50%,transparent_75%)] mix-blend-multiply'
        }`}
      />

      {/* 4. Global Dynamic Scroll-Linked Aurora Beam */}
      <div
        ref={scrollWaveRef}
        className={`absolute -top-32 -left-20 w-[120vw] h-[45vh] rounded-[100%] blur-[120px] will-change-transform transition-all duration-300 pointer-events-none ${
          isDarkMode
            ? 'opacity-25 bg-gradient-to-r from-purple-600/30 via-cyan-500/25 to-pink-600/25 mix-blend-screen'
            : 'opacity-15 bg-gradient-to-r from-purple-400/25 via-sky-400/20 to-rose-400/20 mix-blend-multiply'
        }`}
      />

      {/* 5. Delicate Edge Glow Accent (Adds subtle corner refraction) */}
      <div
        className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[110px] pointer-events-none transition-opacity duration-500 ${
          isDarkMode ? 'opacity-20 bg-indigo-500/30' : 'opacity-10 bg-indigo-300/30'
        }`}
      />
      <div
        className={`absolute bottom-10 left-0 w-96 h-96 rounded-full blur-[110px] pointer-events-none transition-opacity duration-500 ${
          isDarkMode ? 'opacity-20 bg-emerald-500/30' : 'opacity-10 bg-emerald-300/30'
        }`}
      />
    </div>
  );
};

export default LightingEffect;
