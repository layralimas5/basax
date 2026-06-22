import { Phone } from "lucide-react";
import { Logo } from "./Logo";

const empresa = [
  { label: "Culturas", href: "#culturas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "O cenário", href: "#solo" },
  { label: "Diferenciais", href: "#diferenciais" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-900 to-brand-950 text-brand-100">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center gap-12 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          {/* Marca */}
          <div className="flex max-w-xs flex-col items-center sm:items-start">
            <Logo variant="white" />
            <p className="mt-4 text-sm text-brand-100/80">
              Produtividade, sustentabilidade e tecnologia no campo para a sua
              produção render mais.
            </p>
            <p className="mt-4 text-sm font-medium text-brand-200">
              Nutrindo a vida do solo.
            </p>

            {/* Redes / contato — apenas ícones */}
            <div className="mt-5 flex items-center gap-5">
              <a
                href="https://instagram.com/basaxbrasil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Basax"
                className="cursor-pointer text-gold-300 transition hover:scale-110 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a
                href="tel:+5527996687221"
                aria-label="Ligar para (27) 99668-7221"
                className="cursor-pointer text-gold-300 transition hover:scale-110 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/5527999119669"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp (27) 99911-9669"
                className="cursor-pointer text-gold-300 transition hover:scale-110 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
              >
                <WhatsAppIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Empresa */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-white">Empresa</h3>
            <ul className="mt-4 grid grid-flow-col grid-rows-4 gap-x-12 gap-y-3 text-center sm:text-left">
              {empresa.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="inline-block text-sm text-brand-100/90 transition hover:translate-x-1 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-800/60 pt-8 text-sm text-brand-200/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Basax. Todos os direitos reservados.</p>
          <p>
            Feito com cuidado — Desenvolvido por{" "}
            <span className="font-medium text-brand-100">Layra Lima</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
