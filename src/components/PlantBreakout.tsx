"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PlantBreakout() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-sm md:mt-2">
      {/* Imagem (cafezeiro + solo) com cantos arredondados, flutuando */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/cenario-planta.png"
            alt="Cafezeiro com raízes vigorosas em solo nutrido pelo BASAX MMM"
            width={1153}
            height={1171}
            priority
            quality={100}
            sizes="(min-width: 768px) 400px, 90vw"
            className="h-auto w-full rounded-3xl drop-shadow-[0_28px_30px_rgba(0,0,0,0.3)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
