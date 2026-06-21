import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Garante que o Turbopack use a raiz deste projeto (evita lockfile externo)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
