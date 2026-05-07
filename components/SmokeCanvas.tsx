"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  vy: number;          // upward drift speed
  swayAmp: number;     // horizontal sway amplitude
  swayFreq: number;    // sway frequency
  swayOff: number;     // phase offset
  alpha: number;       // current opacity
  targetAlpha: number; // settled opacity
  age: number;         // frames alive (for fade-in)
  isGold: boolean;     // true = gold, false = white
}

const FADE_IN_FRAMES = 60;

export default function SmokeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const c = ctx;

    const isMobile = window.innerWidth < 768;
    const TOTAL = isMobile ? 72 : 132;

    let width = 0;
    let height = 0;
    let animId: number;

    function resize() {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function rand(a: number, b: number) {
      return a + Math.random() * (b - a);
    }

    function makeParticle(startY?: number): Particle {
      return {
        x: Math.random() * width,
        y: startY !== undefined ? startY : Math.random() * height,
        radius: rand(0.3, 1.8),
        vy: rand(0.1, 0.5),
        swayAmp: rand(0.05, 0.3),
        swayFreq: rand(0.008, 0.025),
        swayOff: Math.random() * Math.PI * 2,
        alpha: 0,
        targetAlpha: rand(0.15, 0.7),
        age: startY !== undefined ? 0 : FADE_IN_FRAMES, // pre-aged for initial fill
        isGold: Math.random() < 0.6,
      };
    }

    // Seed particles spread across full canvas height
    const particles: Particle[] = Array.from({ length: TOTAL }, () => makeParticle());

    let frame = 0;

    function tick() {
      frame++;
      for (const p of particles) {
        p.age++;

        // Fade in over first FADE_IN_FRAMES frames
        const targetA = p.isGold ? p.targetAlpha : p.targetAlpha * 0.4;
        p.alpha = p.age >= FADE_IN_FRAMES
          ? targetA
          : (p.age / FADE_IN_FRAMES) * targetA;

        // Drift upward
        p.y -= p.vy;

        // Subtle horizontal sine sway
        p.x += Math.sin(frame * p.swayFreq + p.swayOff) * p.swayAmp;

        // Respawn at bottom when particle exits top
        if (p.y < -p.radius) {
          p.x = Math.random() * width;
          p.y = height + p.radius;
          p.age = 0;
          p.alpha = 0;
          p.targetAlpha = rand(0.15, 0.7);
          p.radius = rand(0.3, 1.8);
          p.vy = rand(0.1, 0.5);
        }
      }
    }

    function draw() {
      c.clearRect(0, 0, width, height);
      for (const p of particles) {
        if (p.alpha < 0.005) continue;
        c.beginPath();
        c.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.isGold) {
          c.fillStyle = `rgba(200,169,126,${p.alpha})`;
        } else {
          c.fillStyle = `rgba(245,245,240,${p.alpha * 0.4})`;
        }
        c.fill();
      }
    }

    function loop() {
      tick();
      draw();
      animId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
