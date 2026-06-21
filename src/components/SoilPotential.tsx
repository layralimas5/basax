import { Reveal } from "./Reveal";
import { PlantBreakout } from "./PlantBreakout";

const problemas = [
  "Nutrientes retidos no solo.",
  "Perda gradual da fertilidade.",
  "Menor eficiência no aproveitamento dos insumos.",
  "Compactação e redução da atividade biológica.",
  "Necessidade crescente de correções e intervenções.",
];

export function SoilPotential() {
  return (
    <section
      id="solo"
      className="scroll-mt-24 border-y border-zinc-200 bg-zinc-50/60 py-20 md:py-28 dark:border-zinc-800 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Imagem (movida da seção Sobre) */}
          <div className="md:order-1">
            <PlantBreakout />
          </div>

          {/* Texto */}
          <Reveal className="md:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              O cenário
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50">
              O solo brasileiro tem mais potencial do que aparenta.
            </h2>
            <p className="mt-5 text-pretty text-lg text-zinc-600 dark:text-zinc-400">
              A cada safra, parte dos nutrientes deixa de ser aproveitada de
              forma eficiente.
            </p>

            <ul className="mt-7 space-y-3">
              {problemas.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 0.06} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span className="text-zinc-700 dark:text-zinc-300">{p}</span>
                </Reveal>
              ))}
            </ul>

            <p className="mt-7 rounded-2xl border border-brand-100 bg-brand-50/70 p-5 text-pretty font-medium text-zinc-800 dark:border-brand-900/40 dark:bg-brand-950/20 dark:text-zinc-200">
              O <span className="font-semibold text-brand-700 dark:text-brand-400">BASAX MMM</span>{" "}
              atua para recuperar o equilíbrio do sistema solo-planta,
              favorecendo a disponibilidade nutricional e fortalecendo a base
              produtiva da lavoura.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
