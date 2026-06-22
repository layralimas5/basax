"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  CircleCheck,
  CircleX,
  Layers,
  CloudRain,
  Snowflake,
  Bug,
  TrendingDown,
  Sprout,
  Droplets,
  Thermometer,
  ShieldCheck,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "./Logo";

const EASE = [0.16, 1, 0.3, 1] as const;

type Linha = { icon: LucideIcon; titulo: string; desc: string };

const antes: Linha[] = [
  { icon: Layers, titulo: "Solo fraco e compactado", desc: "Raízes superficiais. A água da chuva escorre e não infiltra." },
  { icon: CloudRain, titulo: "Refém da chuva", desc: "15 dias sem água e a lavoura sente. Quebra de produtividade." },
  { icon: Snowflake, titulo: "Sofre com frio e geada", desc: "Alta perda de florada e de ponteiros no inverno." },
  { icon: Bug, titulo: "Alvo fácil de pragas", desc: "Planta debilitada e gasto alto com defensivos." },
  { icon: TrendingDown, titulo: "Nutrição que não fica", desc: "Adubo solúvel que lixivia na primeira chuva." },
];

const depois: Linha[] = [
  { icon: Sprout, titulo: "Solo estruturado e vivo", desc: "Raízes profundas. Maior infiltração e retenção de água." },
  { icon: Droplets, titulo: "Resistente à seca", desc: "A planta atravessa o veranico com mais vigor e menos estresse." },
  { icon: Thermometer, titulo: "Tolerante ao frio", desc: "A lavoura suporta melhor as baixas temperaturas." },
  { icon: ShieldCheck, titulo: "Defesas naturais ativas", desc: "Planta mais robusta, menos suscetível a doenças." },
  { icon: RefreshCcw, titulo: "Nutrição completa e residual", desc: "Remineraliza o solo. Efeito que permanece safra após safra." },
];

const listV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const rowV: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export function Comparativo() {
  const reduce = useReducedMotion();

  return (
    <section id="comparativo" className="scroll-mt-24 overflow-hidden bg-white py-20 md:py-28 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Título */}
        <motion.h2
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-balance text-center text-2xl font-bold leading-tight tracking-tight text-brand-900 md:text-3xl dark:text-brand-200"
        >
          O mesmo solo, resultados opostos.
          <br />
          <span className="text-xl font-semibold text-brand-800 md:text-2xl dark:text-brand-300">
            Veja o que o Programa Nutricional Completo muda na sua lavoura.
          </span>
        </motion.h2>

        {/* Selo MUDA ESSE JOGO */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="mt-8 flex justify-center"
        >
          <div className="relative grid h-28 w-28 place-items-center">
            {/* anel girando */}
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full border-2 border-dashed border-gold-400/50"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-700 to-brand-950 px-2 text-center">
              <div className="flex flex-col items-center gap-1.5">
                <Logo variant="white" className="h-3.5 w-auto" />
                <span className="text-[10px] font-bold uppercase leading-tight tracking-wider text-gold-300">
                  Muda esse jogo
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Colunas */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Seu solo hoje — desliza da esquerda */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h3 className="mb-4 text-center text-2xl font-bold uppercase tracking-tight text-red-600 sm:text-3xl dark:text-red-400">
              Seu solo hoje
            </h3>
            <div className="overflow-hidden rounded-3xl border border-red-200 shadow-sm dark:border-red-900/40">
              <div className="flex items-center gap-2 bg-red-600 px-6 py-4 text-white">
                <CircleX className="h-5 w-5" strokeWidth={2.5} />
                <h4 className="text-sm font-semibold uppercase tracking-wider">
                  Como está sendo tratado
                </h4>
              </div>
              <motion.ul
                variants={listV}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="divide-y divide-red-100 bg-red-50/40 dark:divide-red-900/30 dark:bg-red-950/10"
              >
                {antes.map((l) => (
                  <motion.li
                    key={l.titulo}
                    variants={rowV}
                    whileHover={reduce ? undefined : { x: 4 }}
                    className="group flex items-start gap-4 px-6 py-4 transition-colors hover:bg-red-50 dark:hover:bg-red-950/20"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-100 text-red-600 transition-transform group-hover:scale-110 dark:bg-red-900/40 dark:text-red-400">
                      <l.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-800 dark:text-zinc-200">{l.titulo}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{l.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Com BASAX MMM — desliza da direita */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <h3 className="mb-4 text-center text-2xl font-bold uppercase tracking-tight text-brand-700 sm:text-3xl dark:text-brand-400">
              Com BASAX MMM
            </h3>
            <div className="overflow-hidden rounded-3xl border border-brand-200 shadow-sm shadow-brand-900/5 dark:border-brand-900/40">
              <div className="flex items-center gap-2 bg-brand-600 px-6 py-4 text-white">
                <CircleCheck className="h-5 w-5" strokeWidth={2.5} />
                <h4 className="text-sm font-semibold uppercase tracking-wider">
                  BASAX MMM
                </h4>
              </div>
              <motion.ul
                variants={listV}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="divide-y divide-brand-100 bg-brand-50/40 dark:divide-brand-900/30 dark:bg-brand-950/10"
              >
                {depois.map((l) => (
                  <motion.li
                    key={l.titulo}
                    variants={rowV}
                    whileHover={reduce ? undefined : { x: 4 }}
                    className="group flex items-start gap-4 px-6 py-4 transition-colors hover:bg-brand-50 dark:hover:bg-brand-950/20"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700 transition-transform group-hover:scale-110 dark:bg-brand-900/40 dark:text-brand-300">
                      <l.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-800 dark:text-zinc-200">{l.titulo}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{l.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>

        {/* Resultado */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-brand-700 to-brand-600 px-6 py-5 text-center text-pretty font-medium text-white shadow-lg shadow-brand-900/20 md:text-lg">
            <Sprout className="hidden h-6 w-6 shrink-0 text-brand-200 sm:block" />
            <p>
              Resultado do Programa Nutricional Completo Basax:{" "}
              <span className="font-semibold">
                lavoura mais robusta, pronta pra seca, frio e pragas.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
