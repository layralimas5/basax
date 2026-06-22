"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#culturas", label: "Culturas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#solo", label: "O cenário" },
  { href: "#diferenciais", label: "Diferenciais" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 transition-all duration-300",
          scrolled
            ? "my-2 rounded-2xl border border-zinc-200/70 bg-white/80 py-2.5 shadow-sm backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/70"
            : "py-5",
        )}
      >
        <a href="#" className="shrink-0">
          <Logo
            variant={scrolled ? "green" : "white"}
            className={cn(
              "h-6 transition-all",
              !scrolled && "drop-shadow-[0_2px_8px_rgb(0_0_0_/_0.45)]",
            )}
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              whileHover={
                reduce
                  ? undefined
                  : {
                      scale: [1, 1.12, 1],
                      transition: {
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-zinc-600 hover:text-brand-700 dark:text-zinc-400 dark:hover:text-brand-300"
                  : "text-white/90 hover:text-white [text-shadow:0_1px_8px_rgb(0_0_0_/_0.4)]",
              )}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border transition-colors md:hidden",
              scrolled
                ? "border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                : "border-white/30 bg-white/10 text-white backdrop-blur-sm",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2 shadow-lg md:hidden dark:border-zinc-800 dark:bg-zinc-950"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-brand-50 hover:text-brand-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
