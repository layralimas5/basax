"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Gem, Microscope, Layers, Atom, Infinity as InfinityIcon, type LucideIcon } from "lucide-react";
import { staggerContainer, staggerItem } from "./Reveal";

type Item = { icon: LucideIcon; title: string; desc: string };

const itens: Item[] = [
  {
    icon: Gem,
    title: "Remineralização inteligente",
    desc: "Reposição gradual de minerais essenciais para o equilíbrio do solo.",
  },
  {
    icon: Microscope,
    title: "Ativação biológica",
    desc: "Estimula microrganismos benéficos e fortalece o ambiente radicular.",
  },
  {
    icon: Layers,
    title: "Condicionamento orgânico",
    desc: "Melhora a estrutura física do solo, retenção de água e disponibilidade de nutrientes.",
  },
  {
    icon: Atom,
    title: "Nutrição mais eficiente",
    desc: "Favorece o aproveitamento de fósforo, micronutrientes e outros elementos essenciais.",
  },
  {
    icon: InfinityIcon,
    title: "Resultado de longa duração",
    desc: "Combina efeito inicial e ação residual para construção contínua da fertilidade.",
  },
];

export function Diferenciais() {
  const reduce = useReducedMotion();

  return (
    <section
      id="diferenciais"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      {/* Imagem de fundo desfocada */}
      <Image
        src="/beneficios-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 scale-105 object-cover object-center"
      />
      {/* Overlay verde escuro para o clima dark + legibilidade */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950/94 via-brand-900/88 to-brand-950/95" />

      {/* brilhos de fundo */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Título com moldura de cantos */}
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">
            O que nos diferencia
          </p>
          <div className="relative mt-4 inline-block px-7 py-3">
            <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-brand-400" />
            <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-brand-400" />
            <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-brand-400" />
            <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-brand-400" />
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-4xl">
              Diferenciais do BASAX MMM
            </h2>
          </div>
        </div>

        {/* Cards de vidro */}
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-6"
        >
          {itens.map((it, i) => (
            <motion.li
              key={it.title}
              variants={staggerItem}
              whileHover={reduce ? undefined : { y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`group relative rounded-3xl border border-white/10 bg-white/5 px-6 pb-7 pt-12 text-center shadow-xl shadow-brand-950/40 backdrop-blur-md transition-colors hover:border-brand-400/40 hover:bg-white/10 lg:col-span-2 ${
                i === 3 ? "lg:col-start-2" : ""
              }`}
            >
              {/* ícone saindo do topo */}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2">
                <div className="relative grid place-items-center">
                  {!reduce && (
                    <motion.span
                      className="absolute h-16 w-16 rounded-2xl bg-brand-400/40 blur-md"
                      animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    />
                  )}
                  <motion.span
                    whileHover={reduce ? undefined : { rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-lg shadow-brand-900/50 ring-1 ring-white/20"
                  >
                    <it.icon className="h-7 w-7" />
                  </motion.span>
                </div>
              </div>

              <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
                {it.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/60">
                {it.desc}
              </p>

              {/* linha inferior estilo "produto" */}
              <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-4">
                <span className="text-xs font-medium uppercase tracking-widest text-brand-300">
                  Diferencial
                </span>
                <span className="text-xs font-semibold text-white/80">0{i + 1}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
