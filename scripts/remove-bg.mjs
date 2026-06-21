import { removeBackground } from "@imgly/background-removal-node";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const src = path.join(root, "assets-src-planta.png");
const out = path.join(root, "public", "sobre-planta.png");

console.log("Removendo fundo (pode baixar o modelo na 1ª vez)...");
const data = await fs.readFile(src);
const input = new Blob([data], { type: "image/png" });
const blob = await removeBackground(input);
const buf = Buffer.from(await blob.arrayBuffer());

// recorta bordas transparentes para o sujeito ficar justo no enquadramento
await sharp(buf).trim({ threshold: 5 }).png().toFile(out);
const meta = await sharp(out).metadata();
console.log(`OK -> public/sobre-planta.png  ${meta.width}x${meta.height} hasAlpha=${meta.hasAlpha}`);
await fs.rm(src, { force: true });
