"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Leaf } from "lucide-react";
import { BannerParticles } from "./BannerParticles";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden">
      {/* Foto de fundo com Ken Burns (zoom/pan contínuo) */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={reduce ? undefined : { scale: [1, 1.09, 1], x: [0, -14, 0], y: [0, -10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/banner-foto.png"
          alt="Produtor rural no campo ao entardecer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Efeito verde (combina com a identidade) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-800/55 via-brand-900/30 to-brand-950/60 mix-blend-multiply" />
      {/* Sombreamento verde para legibilidade do texto */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-950/75 via-brand-950/35 to-brand-950/55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_55%_at_center,rgba(2,44,23,0.7),transparent_72%)]" />
      {/* Degradê suave de transição para a próxima seção (branco) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-b from-transparent to-white" />

      {/* Partículas brilhantes subindo do solo */}
      <BannerParticles />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-32 text-center [text-shadow:0_1px_2px_rgb(0_0_0_/_0.6),0_4px_24px_rgb(0_0_0_/_0.7)]">
        <motion.h1
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-balance text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Solo vivo.
          <br />
          <span className="bg-gradient-to-r from-brand-200 to-brand-400 bg-clip-text text-transparent [text-shadow:none] [filter:drop-shadow(0_2px_10px_rgb(0_0_0_/_0.55))]">
            Resultado que permanece.
          </span>
        </motion.h1>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-lg text-zinc-100"
        >
          Nutrição que trabalha com o solo para construir produtividade hoje e
          fertilidade para os próximos ciclos.
        </motion.p>

        {/* Assinatura */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            <Leaf className="h-3.5 w-3.5 text-brand-300" />
            Basax MMM
          </span>
          <p className="text-base font-medium text-brand-200 md:text-lg [text-shadow:0_0_18px_rgba(21,189,95,0.55)]">
            Nutrindo a vida do solo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
