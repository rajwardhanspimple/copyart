import fs from 'fs';
import path from 'path';

const OUT = 'dist';
fs.mkdirSync(OUT, { recursive: true });

const itemsToCopy = [
  'index.html',
  'icon.svg',
  'apple-icon.png',
  'favicon.ico',
  '_next',
  'fonts',
  'model',
  'sticker_img',
  'work',
  'img',
  'reunimos',
  'adrive',
  'inspire_mono',
  'shore_icon',
  'teambition',
  'wasm_design_utils'
];

for (const item of itemsToCopy) {
  if (fs.existsSync(item)) {
    const stat = fs.statSync(item);
    if (stat.isDirectory()) {
      fs.cpSync(item, path.join(OUT, item), { recursive: true });
    } else {
      fs.copyFileSync(item, path.join(OUT, item));
    }
    console.log(`Copied to ${OUT}: ${item}`);
  }
}

console.log('✓ Successfully prepared distribution bundle in dist/ for Vercel/Netlify!');
