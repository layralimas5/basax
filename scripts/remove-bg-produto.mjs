import { removeBackground } from "@imgly/background-removal-node";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const src = path.join(root, "produto.jpeg");
const out = path.join(root, "public", "produto-basax.png");

console.log("Removendo fundo do produto...");
const data = await fs.readFile(src);
const input = new Blob([data], { type: "image/jpeg" });
const blob = await removeBackground(input);
const buf = Buffer.from(await blob.arrayBuffer());

// mantém só o maior componente conectado (remove ilhas/respingos)
const { data: px, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height, N = W * H, TH = 40;
const solid = new Uint8Array(N);
for (let p = 0; p < N; p++) solid[p] = px[p * 4 + 3] > TH ? 1 : 0;
const label = new Int32Array(N).fill(-1);
const stack = new Int32Array(N);
let best = -1, bestSize = 0, cur = 0;
for (let s = 0; s < N; s++) {
  if (!solid[s] || label[s] !== -1) continue;
  let sp = 0; stack[sp++] = s; label[s] = cur; let size = 0;
  while (sp) {
    const p = stack[--sp]; size++; const x = p % W, y = (p / W) | 0;
    if (x > 0 && solid[p - 1] && label[p - 1] === -1) { label[p - 1] = cur; stack[sp++] = p - 1; }
    if (x < W - 1 && solid[p + 1] && label[p + 1] === -1) { label[p + 1] = cur; stack[sp++] = p + 1; }
    if (y > 0 && solid[p - W] && label[p - W] === -1) { label[p - W] = cur; stack[sp++] = p - W; }
    if (y < H - 1 && solid[p + W] && label[p + W] === -1) { label[p + W] = cur; stack[sp++] = p + W; }
  }
  if (size > bestSize) { bestSize = size; best = cur; }
  cur++;
}
const outBuf = Buffer.from(px);
for (let p = 0; p < N; p++) if (label[p] !== best) outBuf[p * 4 + 3] = 0;

await sharp(outBuf, { raw: { width: W, height: H, channels: 4 } })
  .trim({ threshold: 8 })
  .sharpen({ sigma: 1 })
  .png()
  .toFile(out);
const m = await sharp(out).metadata();
console.log(`OK -> public/produto-basax.png  ${m.width}x${m.height}`);
