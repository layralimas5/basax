"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Atom,
  Sprout,
  Wheat,
  Microscope,
  Droplets,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Item = { icon: LucideIcon; text: string };

const items: Item[] = [
  { icon: Atom, text: "Melhor aproveitamento dos nutrientes disponíveis" },
  { icon: Sprout, text: "Estímulo ao desenvolvimento radicular" },
  { icon: Wheat, text: "Construção gradual da fertilidade" },
  { icon: Microscope, text: "Ativação da vida biológica do solo" },
  { icon: Droplets, text: "Maior retenção de água e nutrientes" },
  { icon: RefreshCcw, text: "Mais equilíbrio para ciclos futuros" },
];

const listV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemV: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Beneficios() {
  const reduce = useReducedMotion();

  return (
    <section
      id="beneficios"
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
      {/* Overlay verde para legibilidade do texto */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-700/90 via-brand-700/85 to-brand-800/92" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-gold-300"
        >
          Benefícios
        </motion.p>
        <motion.h2
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="mt-3 text-balance text-center text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Nutrição que trabalha com o solo
        </motion.h2>

        {/* Fileira de benefícios com ícones */}
        <motion.ul
          variants={listV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6"
        >
          {items.map((it) => (
            <motion.li
              key={it.text}
              variants={itemV}
              className="group flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={reduce ? undefined : { y: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="relative grid h-20 w-20 place-items-center"
              >
                {/* halo pulsante */}
                {!reduce && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white/25 blur-md"
                    animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.25, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                {/* círculo do ícone */}
                <span className="relative grid h-20 w-20 place-items-center rounded-full border border-white/30 bg-white/15 text-white shadow-lg shadow-brand-950/25 backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-brand-700">
                  <it.icon className="h-8 w-8" strokeWidth={1.8} />
                </span>
              </motion.div>

              <p className="mt-5 text-sm font-medium leading-snug text-white/95 md:text-base">
                {it.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
