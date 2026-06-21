import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcPath = path.join(root, "public", "banner-solo.png");
const outPath = path.join(root, "public", "banner-solo-clean.png");

// centros (px) dos códigos detectados
const labels = [
  { cx: 450, cy: 423 }, // Si
  { cx: 458, cy: 686 }, // Ca
  { cx: 615, cy: 556 }, // Fe
  { cx: 588, cy: 786 }, // Mg
  { cx: 1110, cy: 556 }, // Cu
  { cx: 1219, cy: 495 }, // Zn
  { cx: 1235, cy: 649 }, // Mn
  { cx: 1108, cy: 783 }, // B
];

const S = 120; // tamanho do patch
const half = S / 2;

const { data, info } = await sharp(srcPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// máscara radial suave (feather) reutilizável
function smooth(t) { t = Math.min(1, Math.max(0, t)); return t * t * (3 - 2 * t); }

const patches = [];
for (const { cx, cy } of labels) {
  const dirX = cx < W / 2 ? -1 : 1;
  // origem da textura: deslocada para fora e um pouco abaixo (solo limpo)
  const sx = clamp(cx + dirX * 160 - half, 0, W - S);
  const sy = clamp(cy + 70 - half, 0, H - S);
  const dx = clamp(cx - half, 0, W - S);
  const dy = clamp(cy - half, 0, H - S);

  const buf = Buffer.alloc(S * S * 4);
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const si = ((sy + y) * W + (sx + x)) * 4;
      const di = (y * S + x) * 4;
      buf[di] = data[si];
      buf[di + 1] = data[si + 1];
      buf[di + 2] = data[si + 2];
      // alpha radial: opaco no centro, some na borda
      const nx = (x - half) / half, ny = (y - half) / half;
      const d = Math.sqrt(nx * nx + ny * ny);
      buf[di + 3] = Math.round(smooth((1 - d) / 0.55) * 255);
    }
  }
  const png = await sharp(buf, { raw: { width: S, height: S, channels: 4 } }).blur(1.2).png().toBuffer();
  patches.push({ input: png, left: dx, top: dy });
}

await sharp(srcPath).composite(patches).png().toFile(outPath);
console.log(`OK -> public/banner-solo-clean.png (${labels.length} patches)`);
