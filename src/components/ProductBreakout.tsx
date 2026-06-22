"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProductBreakout() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto mt-16 w-full max-w-[13rem] sm:max-w-[16rem] md:mt-6 md:max-w-xs">
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
        {/* Escurecimento sutil na base (verde escuro, mantém o tom) */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-950/45 to-transparent" />
      </motion.div>

      {/* Sombra de contato do produto no card */}
      <div className="absolute bottom-[6%] left-1/2 h-6 w-3/5 -translate-x-1/2 rounded-[50%] bg-brand-950/55 blur-lg" />

      {/* Produto saindo para fora do card (breakout) */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
        className="pointer-events-none absolute bottom-[5%] left-1/2 w-[64%] -translate-x-1/2"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src="/produto-basax-v2.png"
            alt="Embalagem do fertilizante Basax MMM"
            width={396}
            height={697}
            priority
            quality={100}
            sizes="(min-width: 768px) 220px, 50vw"
            className="h-auto w-full drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)]"
            style={{
              maskImage: "linear-gradient(to top, transparent 1%, #000 24%)",
              WebkitMaskImage: "linear-gradient(to top, transparent 1%, #000 24%)",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
