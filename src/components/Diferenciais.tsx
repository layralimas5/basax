"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Gem,
  Microscope,
  Layers,
  Atom,
  Infinity as InfinityIcon,
  type LucideIcon,
} from "lucide-react";
import { staggerContainer, staggerItem } from "./Reveal";

type Item = { icon: LucideIcon; title: string; desc: string };

const itens: Item[] = [
  {
    icon: Gem,
    title: "Remineralização inteligente",
    desc: "Reposição gradual de minerais essenciais para o equilíbrio do solo, construindo fertilidade que permanece safra após safra.",
  },
  {
    icon: Microscope,
    title: "Ativação biológica",
    desc: "Estimula microrganismos benéficos e fortalece o ambiente radicular.",
  },
  {
    icon: Layers,
    title: "Condicionamento orgânico",
    desc: "Melhora a estrutura física do solo, a retenção de água e a disponibilidade de nutrientes.",
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950/94 via-brand-900/88 to-brand-950/95" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">
            O que nos diferencia
          </p>
          <div className="relative mt-4 inline-block px-7 py-3">
            <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-gold-400" />
            <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-gold-400" />
            <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-gold-400" />
            <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-gold-400" />
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-4xl">
              Diferenciais do BASAX MMM
            </h2>
          </div>
        </div>

        {/* Bento grid: 1 card destaque + menores */}
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {itens.map((it, i) => {
            const destaque = i === 0;
            return (
              <motion.li
                key={it.title}
                variants={staggerItem}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-gold-400/40 hover:bg-white/10 ${
                  destaque
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-1"
                    : ""
                }`}
              >
                {destaque && (
                  <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold-400/10 blur-2xl" />
                )}
                <div className="relative flex items-center justify-between">
                  <span
                    className={`grid place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-lg shadow-brand-900/40 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${
                      destaque ? "h-14 w-14" : "h-12 w-12"
                    }`}
                  >
                    <it.icon className={destaque ? "h-7 w-7" : "h-6 w-6"} />
                  </span>
                  <span className="text-gold-gradient text-2xl font-bold">
                    0{i + 1}
                  </span>
                </div>
                <h3
                  className={`relative mt-5 font-semibold tracking-tight text-white ${
                    destaque ? "text-2xl" : "text-lg"
                  }`}
                >
                  {it.title}
                </h3>
                <p
                  className={`relative mt-2 leading-relaxed text-white/60 ${
                    destaque ? "max-w-md text-base" : "text-sm"
                  }`}
                >
                  {it.desc}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>

      {/* Degradê na base: funde para verde sólido, casando com o topo da seção Impacto (sem linha) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent to-brand-950" />
    </section>
  );
}
