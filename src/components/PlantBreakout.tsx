"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PlantBreakout() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto mt-12 w-full max-w-xs md:mt-6">
      {/* Painel / card */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 shadow-2xl shadow-brand-900/25"
      >
        <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -bottom-12 -right-8 h-52 w-52 rounded-full bg-brand-950/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </motion.div>

      {/* Sombra de apoio no chão do card */}
      <div className="absolute bottom-[5%] left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-[50%] bg-brand-950/30 blur-md" />

      {/* Planta saindo para fora do card (breakout) */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
        className="pointer-events-none absolute bottom-[3%] left-1/2 w-[120%] -translate-x-1/2"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -14, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/sobre-planta.png"
            alt="Mãos segurando uma muda em solo fértil"
            width={965}
            height={886}
            priority
            quality={100}
            sizes="(min-width: 768px) 360px, 90vw"
            className="h-auto w-full drop-shadow-[0_30px_30px_rgba(0,0,0,0.28)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
