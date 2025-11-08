"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotation: number;
  scale: number;
  element: SVGElement | null;
}

interface AnimatedBubbleParticlesProps {
  className?: string;
  particleColorLight?: string;
  particleColorDark?: string;
  particleSize?: number;
  maxBubbles?: number;
  spawnInterval?: number;
  blurStrength?: number;
  enableGooEffect?: boolean;
  zIndex?: number;
  width?: string;
  height?: string;
  children?: React.ReactNode;
} // light cyan

const AnimatedBubbleParticles: React.FC<AnimatedBubbleParticlesProps> = ({
  className,
  particleColorLight = "#00D3FF",  // bright violet
  particleColorDark  = "#38BDF8" ,
  particleSize = 20,
  maxBubbles = 50,
  spawnInterval = 120,
  blurStrength = 300,
  enableGooEffect = true,
  zIndex = 0,
  width = "100vw",
  height = "100vh",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const intervalRef = useRef<number>();
  const particles = useRef<Particle[]>([]);
  const gooId = useRef("goo-" + Math.random().toString(36).slice(2, 9));

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [dims, setDims] = useState({ width: 0, height: 0 });

  const MAX_Z = 1200;

  // Create a bubble SVG
  const createBubble = useCallback(() => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.style.cssText = `
      position: absolute;
      width: ${particleSize}px;
      height: ${particleSize}px;
      will-change: transform, opacity, filter;
      transform-style: preserve-3d;
    `;

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "50");

    const baseColor = isDark ? particleColorDark : particleColorLight;
    const hueShift = Math.random() * 20 - 10;
    circle.setAttribute(
      "fill",
      `hsl(${parseInt(baseColor.replace("#", ""), 16) % 360 + hueShift}, 90%, 60%)`
    );

    svg.appendChild(circle);
    return svg;
  }, [particleSize, isDark, particleColorDark, particleColorLight]);

  // Spawn new bubble at random position and medium distance
  const spawnBubble = useCallback(() => {
    if (!dims.width || !dims.height) return;
    if (particles.current.length >= maxBubbles) return;

    const el = createBubble();
    particlesRef.current?.appendChild(el);

    const x = Math.random() * dims.width;
    const y = Math.random() * dims.height;
    const z = MAX_Z * (0.4 + Math.random() * 0.6); // closer range: 40–100% of max distance

    const vx = (Math.random() - 0.5) * 0.8; // slight horizontal drift
    const vy = (Math.random() - 0.5) * 0.8; // slight vertical drift
    const vz = -(Math.random() * 6 + 6); // much faster toward viewer

    const scale = 0.2 + Math.random() * 1.1;

    particles.current.push({
      x,
      y,
      z,
      vx,
      vy,
      vz,
      rotation: Math.random() * 360,
      scale,
      element: el,
    });
  }, [createBubble, dims, maxBubbles]);

  // Update and render particles
  const update = useCallback(() => {
    const perspective = 700;

    for (let p of particles.current) {
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;
      p.rotation += 0.4;

      // Wrap around when the bubble passes the viewer
      if (p.z < -80) {
        p.z = MAX_Z * (0.5 + Math.random() * 0.5);
        p.x = Math.random() * dims.width;
        p.y = Math.random() * dims.height;
      }

      // Perspective projection
      const scale = perspective / (perspective + p.z);
      const screenX = (p.x - dims.width / 2) * scale + dims.width / 2;
      const screenY = (p.y - dims.height / 2) * scale + dims.height / 2;

      // Depth-based visual effects
      const opacity = Math.max(0.1, Math.min(1, 0.25 + (MAX_Z - p.z) / MAX_Z));
      const glow = 3 + (1 - p.z / MAX_Z) * 14;
      const size = p.scale * scale * particleSize;

      if (p.element) {
        p.element.style.opacity = `${opacity}`;
        p.element.style.filter = `drop-shadow(0 0 ${glow}px ${
          isDark ? particleColorDark : particleColorLight
        })`;
        p.element.style.width = `${size}px`;
        p.element.style.height = `${size}px`;
        p.element.style.transform = `translate(${screenX}px, ${screenY}px) rotate(${p.rotation}deg)`;
      }
    }

    animationRef.current = requestAnimationFrame(update);
  }, [dims, isDark, particleColorDark, particleColorLight, particleSize]);

  // Handle container size changes
  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setDims({ width: rect.width, height: rect.height });

    const handleResize = () => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      setDims({ width: r.width, height: r.height });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Start animation and spawning
  useEffect(() => {
    animationRef.current = requestAnimationFrame(update);
    intervalRef.current = window.setInterval(spawnBubble, spawnInterval);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      clearInterval(intervalRef.current!);
      particles.current.forEach((p) => p.element?.remove());
      particles.current = [];
    };
  }, [update, spawnBubble, spawnInterval]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden select-none bg-white/10 dark:bg-black/30 backdrop-blur-md")}
      style={{
        width,
        height,
        zIndex,
        perspective: "800px",
      }}
    >
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          transformStyle: "preserve-3d",
          filter: enableGooEffect ? `url(#${gooId.current})` : undefined,
        }}
      />

      <div className={cn("absolute inset-0 z-10 ",className)}>
        {children}
      </div>

      {enableGooEffect && (
        <svg className="absolute w-0 h-0 -z-20">
          <defs>
            <filter id={gooId.current}>
              <feGaussianBlur in="SourceGraphic" stdDeviation={blurStrength} result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default React.memo(AnimatedBubbleParticles);
