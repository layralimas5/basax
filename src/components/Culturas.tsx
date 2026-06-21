"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Coffee,
  Apple,
  Sprout,
  Cherry,
  Banana,
  TreePalm,
  Grape,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Cultura = {
  nome: string;
  icon: LucideIcon;
  /**
   * Foto que PREENCHE o card (cobre toda a área). Use para fotos comuns,
   * com fundo. Ex.: img: "/culturas/soja.jpg".
   */
  img?: string;
  /**
   * Imagem RECORTADA com fundo transparente (PNG). Fica FLUTUANDO sobre o
   * card verde, com leve balanço. Ex.: cutout: "/culturas/cafe.png".
   */
  cutout?: string;
};

const culturas: Cultura[] = [
  { nome: "Banana", icon: Banana, cutout: "/culturas/banana.png" },
  { nome: "Café", icon: Coffee, cutout: "/culturas/cafe.png" },
  { nome: "Coco", icon: TreePalm /* img: "/culturas/coco.jpg" */ },
  { nome: "Mamão", icon: Apple /* img: "/culturas/mamao.jpg" */ },
  { nome: "Maracujá", icon: Grape /* img: "/culturas/maracuja.jpg" */ },
  { nome: "Pimenta do reino", icon: Sprout /* img: "/culturas/pimenta-do-reino.jpg" */ },
  { nome: "Tomate", icon: Cherry /* img: "/culturas/tomate.jpg" */ },
];

const itemV: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export function Culturas() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLUListElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  }

  return (
    <section
      id="culturas"
      className="scroll-mt-24 overflow-hidden bg-white py-20 md:py-28 dark:bg-zinc-950"
    >
      {/* Cabeçalho (bloco central) */}
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400"
        >
          Culturas
        </motion.p>
        <motion.h2
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50"
        >
          Indicado para as principais culturas do campo
        </motion.h2>
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-pretty text-lg text-zinc-600 dark:text-zinc-400"
        >
          O BASAX MMM fortalece o solo e potencializa a produtividade em uma
          ampla gama de lavouras.
        </motion.p>
      </div>

      {/* Carrossel (área mais larga que o bloco) */}
      <div className="relative mx-auto mt-12 max-w-[112rem] px-6 lg:px-8">
        <motion.ul
          ref={trackRef}
          onScroll={updateArrows}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth py-6 sm:gap-4"
        >
          {culturas.map((c) => (
            <motion.li
              key={c.nome}
              variants={itemV}
              className="min-w-[8.5rem] flex-1 basis-0 snap-start sm:min-w-[9.5rem]"
            >
              <motion.div
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex flex-col items-center"
              >
                {/* Disco verde circular (menor) com a cultura */}
                <div className="relative aspect-square w-[72%] max-w-[7rem]">
                  {/* halo */}
                  {!reduce && (
                    <div className="absolute inset-2 rounded-full bg-brand-400/25 blur-lg transition-colors group-hover:bg-brand-400/45" />
                  )}
                  {/* disco verde */}
                  <div className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 shadow-lg shadow-brand-900/25 ring-1 ring-black/5">
                    <div
                      className="absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                      }}
                    />
                  </div>

                  {c.img ? (
                    // Foto preenchendo o círculo
                    <Image
                      src={c.img}
                      alt={`Cultura: ${c.nome}`}
                      fill
                      sizes="(min-width: 640px) 12vw, 30vw"
                      className="rounded-full object-cover"
                    />
                  ) : c.cutout ? (
                    // Imagem recortada flutuando sobre o círculo
                    <motion.div
                      animate={reduce ? undefined : { y: [0, -7, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={c.cutout}
                        alt={`Cultura: ${c.nome}`}
                        fill
                        sizes="(min-width: 640px) 14vw, 34vw"
                        className="scale-[1.6] object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.32)]"
                      />
                    </motion.div>
                  ) : (
                    // Placeholder: ícone
                    <c.icon
                      className="absolute left-1/2 top-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 text-white/90"
                      strokeWidth={1.5}
                    />
                  )}
                </div>

                {/* Nome */}
                <span className="mt-4 text-center text-sm font-semibold text-zinc-800 sm:text-base dark:text-zinc-100">
                  {c.nome}
                </span>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Setas — só aparecem quando há cards fora da tela */}
        <ArrowButton dir="left" onClick={() => scroll(-1)} disabled={!canLeft} />
        <ArrowButton
          dir="right"
          onClick={() => scroll(1)}
          disabled={!canRight}
        />
      </div>
    </section>
  );
}

function ArrowButton({
  dir,
  onClick,
  disabled,
}: {
  dir: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) {
  const Icon = dir === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Anterior" : "Próximo"}
      className={`absolute top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-md transition hover:border-brand-300 hover:text-brand-700 disabled:pointer-events-none disabled:opacity-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 ${
        dir === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
      }`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
