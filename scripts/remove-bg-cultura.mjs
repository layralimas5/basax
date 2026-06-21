import { removeBackground } from "@imgly/background-removal-node";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Uso: node scripts/remove-bg-cultura.mjs "<caminho-da-imagem>" <slug>
// Ex.: node scripts/remove-bg-cultura.mjs "C:/.../banana.png" banana
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const src = process.argv[2];
const slug = process.argv[3];
// Modo "solid": torna o objeto totalmente opaco (evita que o fundo vaze por
// áreas claras, ex.: polpa branca do coco). Use quando a imagem tiver partes
// claras/brancas que o recorte deixou semitransparentes.
const solid = process.argv[4] === "solid";
if (!src || !slug) {
  console.error('Uso: node scripts/remove-bg-cultura.mjs "<imagem>" <slug> [solid]');
  process.exit(1);
}
const out = path.join(root, "public", "culturas", `${slug}.png`);

console.log(`Removendo fundo de ${slug}${solid ? " (modo sólido)" : ""}...`);
const data = await fs.readFile(src);
const input = new Blob([data], { type: "image/png" });
const blob = await removeBackground(input);
let buf = Buffer.from(await blob.arrayBuffer());

if (solid) {
  // Binariza o alfa: tudo que for objeto (alfa > limiar) vira 100% opaco.
  const { data: px, info } = await sharp(buf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const TH = 60;
  for (let p = 3; p < px.length; p += 4) px[p] = px[p] > TH ? 255 : 0;
  buf = await sharp(px, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

// Mantém todos os elementos (sem filtro de maior componente). Só recorta o excesso.
await sharp(buf).trim({ threshold: 10 }).png().toFile(out);

const m = await sharp(out).metadata();
console.log(`OK -> public/culturas/${slug}.png  ${m.width}x${m.height}  hasAlpha:${m.hasAlpha}`);
