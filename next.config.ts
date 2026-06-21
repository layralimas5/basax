import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Garante que o Turbopack use a raiz deste projeto (evita lockfile externo)
  turbopack: {
    root: __dirname,
  },
  // Export estático: gera a pasta `out/` com index.html + assets (deploy na Netlify)
  output: "export",
  images: {
    // Necessário no export estático (sem o otimizador de imagens em servidor)
    unoptimized: true,
    // Evita aviso de qualidade no dev (Next 16 exige allowlist)
    qualities: [75, 100],
  },
};

export default nextConfig;
