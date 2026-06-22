"use client";

import { motion, useReducedMotion } from "framer-motion";

// PRNG determinístico (mesmos valores no server e no client -> sem hydration mismatch)
function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(20260620);
const PARTICLES = Array.from({ length: 22 }, () => ({
  left: rand() * 100,
  size: 2 + rand() * 4,
  rise: 220 + rand() * 360,
  sway: (rand() * 2 - 1) * 50,
  dur: 6 + rand() * 7,
  delay: rand() * 8,
  maxOp: 0.35 + rand() * 0.5,
}));

export function BannerParticles() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute bottom-0 rounded-full bg-gold-300 shadow-[0_0_10px_rgba(240,193,75,0.9)]"
          style={{ left: `${p.left}%`, width: p.size, height: p.size }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, p.maxOp, p.maxOp, 0], y: [0, -p.rise], x: [0, p.sway] }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
            times: [0, 0.15, 0.7, 1],
          }}
        />
      ))}
    </div>
  );
}
