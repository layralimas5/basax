import { Logo } from "./Logo";

const empresa = [
  { label: "Sobre", href: "#sobre" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "O cenário", href: "#solo" },
  { label: "Diferenciais", href: "#diferenciais" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:justify-center sm:gap-24 sm:text-left">
          {/* Marca */}
          <div className="flex flex-col items-center sm:items-start">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
              Produtividade, sustentabilidade e tecnologia no campo para a sua
              produção render mais.
            </p>
          </div>

          {/* Empresa */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Empresa
            </h3>
            <ul className="mt-4 space-y-3">
              {empresa.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 sm:flex-row dark:border-zinc-800">
          <p>© {new Date().getFullYear()} Basax. Todos os direitos reservados.</p>
          <p>
            Feito com cuidado — Desenvolvido por{" "}
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Layra Lima
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
