import { Unlock, Recycle, Sprout, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Item = { icon: LucideIcon; titulo: string; text: string };

const itens: Item[] = [
  { icon: Unlock, titulo: "Destrava o fósforo", text: "Libera o fósforo que estava bloqueado e fixado no solo." },
  { icon: Recycle, titulo: "Recicla a palhada", text: "Transforma a palhada velha em nitrogênio disponível para a próxima safra." },
  { icon: Sprout, titulo: "Estimula a raiz", text: "Injeta promotores de crescimento contínuos direto na raiz da planta." },
  { icon: ShieldCheck, titulo: "Protege a lavoura", text: "Bioproteção de alta performance, com redução de custos em defensivos químicos." },
];

export function ImpactoTecnico() {
  return (
    <section
      id="impacto"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-brand-900 to-ink-950 py-20 md:py-28"
    >
      {/* Degradê de topo: funde com a seção escura anterior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-950 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">
            Impacto técnico
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Uma fábrica biológica ativa, passo a passo
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-brand-100/85">
            O <span className="font-semibold text-white">Bio Extrato Proteico</span> do BASAX MMM é
            um insumo biotecnológico multifuncional. Ao aplicá-lo, ele entra em ação:
          </p>
        </Reveal>

        {/* Timeline numerada */}
        <ol className="mx-auto mt-14 max-w-2xl">
          {itens.map((it, i) => (
            <Reveal
              as="li"
              key={it.titulo}
              delay={i * 0.1}
              className="flex gap-5 pb-8 last:pb-0"
            >
              {/* Coluna do número + linha conectora */}
              <div className="flex flex-col items-center">
                <span className="z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-bold text-white shadow-lg shadow-brand-900/40 ring-2 ring-white/15">
                  0{i + 1}
                </span>
                {i < itens.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-gradient-to-b from-white/30 to-white/5" />
                )}
              </div>

              {/* Conteúdo */}
              <div className="group flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-gold-400/40 hover:bg-white/10">
                <div className="flex items-center gap-2.5">
                  <it.icon className="h-5 w-5 text-gold-300 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-semibold tracking-tight text-white">
                    {it.titulo}
                  </h3>
                </div>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-brand-100/80 md:text-base">
                  {it.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm font-medium uppercase tracking-[0.18em] text-gold-300">
            Linha completa: atua desde o plantio até a colheita.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
