import { pdf } from "pdf-to-img";
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const pdfPath = path.join(root, "BASAX_LOGO_TREVO.pdf");

const outputs = [
  { page: 1, name: "logo-basax-green.png" }, // verde — fundo claro
  { page: 2, name: "logo-basax-yellow.png" }, // amarelo — fundo escuro
];

// Transforma apenas o fundo branco em transparente, mantendo a cor da logo
// 100% sólida. Feather suave só na faixa quase-branca (bordas antialiased).
const HI = 250; // min(r,g,b) >= HI  => fundo (transparente)
const LO = 235; // min(r,g,b) <= LO  => logo (opaca)
function whiteToAlpha(data, info) {
  const ch = info.channels;
  const out = Buffer.alloc(info.width * info.height * 4);
  for (let p = 0; p < info.width * info.height; p++) {
    const i = p * ch;
    const r = data[i],
      g = data[i + 1],
      b = data[i + 2];
    const m = Math.min(r, g, b);
    let a;
    if (m >= HI) a = 0;
    else if (m <= LO) a = 1;
    else a = (HI - m) / (HI - LO);
    const o = p * 4;
    out[o] = r;
    out[o + 1] = g;
    out[o + 2] = b;
    out[o + 3] = Math.round(a * 255);
  }
  return out;
}

const doc = await pdf(pdfPath, { scale: 4 });
const pages = {};
let i = 1;
for await (const buf of doc) {
  pages[i++] = buf;
}

for (const o of outputs) {
  const buf = pages[o.page];
  if (!buf) {
    console.log(`Página ${o.page} não encontrada`);
    continue;
  }
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const rgba = whiteToAlpha(data, info);
  const keyed = await sharp(rgba, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();

  const out = path.join(root, "public", o.name);
  await sharp(keyed).trim({ threshold: 1 }).png().toFile(out);
  const meta = await sharp(out).metadata();
  console.log(`${o.name}: ${meta.width}x${meta.height} hasAlpha=${meta.hasAlpha}`);
}
