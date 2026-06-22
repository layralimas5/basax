"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { BannerParticles } from "./BannerParticles";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Fechamento() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-brand-950 py-16 md:py-20">
      {/* Foto de fundo desfocada com zoom suave (ida e volta) */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/fechamento-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      {/* Overlay verde para legibilidade (mais leve, deixa ver a imagem) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-950/70 via-brand-900/45 to-brand-950/72" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(2,44,23,0.55),transparent_72%)]" />

      {/* brilho central */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_45%,rgba(21,189,95,0.18),transparent_70%)]" />
      {/* textura de pontos */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* partículas subindo */}
      <BannerParticles />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center [text-shadow:0_2px_18px_rgb(0_0_0_/_0.55)]">
        <motion.h2
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          O futuro da produtividade começa{" "}
          <span className="bg-gradient-to-r from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent">
            abaixo da superfície.
          </span>
        </motion.h2>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="mt-10 flex items-center justify-center gap-2"
        >
          <Logo variant="white" className="h-9" />
          <span className="text-gold-gradient text-2xl font-bold tracking-tight md:text-3xl">
            MMM
          </span>
        </motion.div>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
          className="mt-3 text-lg text-brand-100/90"
        >
          Nutrindo a vida do solo.
        </motion.p>
      </div>
    </section>
  );
}
