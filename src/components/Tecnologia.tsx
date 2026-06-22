import { Microscope, GraduationCap, BadgeCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Selo = { icon: LucideIcon; titulo: string; desc: string; extra?: string };

const selos: Selo[] = [
  {
    icon: Microscope,
    titulo: "EMBRAPA",
    desc: "Estudos que comprovam a eficiência da aplicação de húmus aliado à vida biológica e à remineralização do solo.",
  },
  {
    icon: GraduationCap,
    titulo: "Pesquisas universitárias",
    desc: "Ciência aplicada ao solo e à produtividade, baseada nos princípios da trofobiose.",
  },
  {
    icon: BadgeCheck,
    titulo: "Legislação MAPA",
    desc: "Produto registrado como fertilizante orgânico.",
    extra: "Nº MAPA: ES 001344-7 000011",
  },
];

export function Tecnologia() {
  return (
    <section
      id="tecnologia"
      className="scroll-mt-24 border-y border-zinc-200 bg-zinc-50/60 py-20 md:py-28 dark:border-zinc-800 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            <span className="h-px w-6 rule-gold" />
            Credibilidade
            <span className="h-px w-6 rule-gold" />
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50">
            Tecnologia respaldada por
          </h2>
        </Reveal>

        {/* Barra única de credibilidade (painel com divisores) */}
        <Reveal delay={0.1} className="mt-12">
          <div className="grid divide-y divide-zinc-200 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
            {selos.map((s) => (
              <div
                key={s.titulo}
                className="group flex flex-col items-center gap-3 p-8 text-center transition-colors hover:bg-brand-50/50 dark:hover:bg-brand-950/20"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-900/20 ring-4 ring-brand-100 transition-transform duration-300 group-hover:scale-110 dark:ring-brand-950/40">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {s.titulo}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {s.desc}
                </p>
                {s.extra && (
                  <p className="mt-1 rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-700 ring-1 ring-gold-300/60 dark:bg-gold-600/15 dark:text-gold-300 dark:ring-gold-500/30">
                    {s.extra}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
