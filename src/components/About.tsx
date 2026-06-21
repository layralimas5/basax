import { Reveal } from "./Reveal";
import { ProductBreakout } from "./ProductBreakout";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Texto principal + produto */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              Basax MMM
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50">
              Produzir mais começa por aproveitar melhor o que já existe.
            </h2>

            <div className="mt-6 space-y-4 text-pretty text-lg text-zinc-600 dark:text-zinc-400">
              <p>
                O <strong className="font-semibold text-zinc-800 dark:text-zinc-200">BASAX MMM</strong>{" "}
                reúne remineralização, condicionamento orgânico e ativação
                biológica em uma solução desenvolvida para fortalecer o solo
                desde a origem.
              </p>
              <p>
                Sua tecnologia favorece a disponibilidade de nutrientes,
                estimula o ambiente radicular, melhora a atividade biológica e
                contribui para a construção gradual da fertilidade.
              </p>
              <p className="border-l-2 border-brand-500 pl-4 font-medium text-zinc-800 dark:text-zinc-200">
                Porque preservar o solo não significa reduzir desempenho.
                Significa criar condições para produzir melhor, com mais
                equilíbrio e maior eficiência ao longo do tempo.
              </p>
            </div>
          </Reveal>

          <ProductBreakout />
        </div>
      </div>
    </section>
  );
}
