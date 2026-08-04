const sharp = require('./node_modules/sharp');
const path = require('path');
const fs = require('fs');

const imagesDir = path.join(__dirname, 'public/images');

// All cropped step images to enhance
// We upscale 2.5x using Lanczos3 (highest quality resampling in sharp)
// and export as high-quality JPEG with mozjpeg encoder for max detail
const SCALE = 2.5;

const images = [
  'Step_01_Unused_Space.jpg',
  'Step_02_List_Your_Space.jpg',
  'Step_03_Entrepreneurs_Book.jpg',
  'Step_04_Display_and_Sell.jpg',
  'Step_05_Extra_Income.jpg',
  'Step_06_Grow_Together.jpg',
  'Entrepreneurs_Infographic~2.jpg',
  'Entrepreneurs_Infographic~3.jpg',
  'Entrepreneurs_Infographic~4.jpg',
  'Entrepreneurs_Infographic~5.jpg',
  'Entrepreneurs_Infographic~6.jpg',
  'Entrepreneurs_Infographic~7.jpg',
];

async function enhanceImages() {
  for (const file of images) {
    const inputPath = path.join(imagesDir, file);
    if (!fs.existsSync(inputPath)) {
      console.log(`SKIP (not found): ${file}`);
      continue;
    }

    const meta = await sharp(inputPath).metadata();
    const newW = Math.round(meta.width * SCALE);
    const newH = Math.round(meta.height * SCALE);

    console.log(`Enhancing ${file}: ${meta.width}x${meta.height} → ${newW}x${newH}`);

    const tmpOut = inputPath + '.enhanced.jpg';

    await sharp(inputPath)
      // Upscale with Lanczos3 - highest quality resampling kernel
      .resize(newW, newH, {
        kernel: sharp.kernel.lanczos3,
        fit: 'fill',
      })
      // Sharpen slightly to recover edge detail lost during compression
      .sharpen({ sigma: 0.6, m1: 0.8, m2: 2.0 })
      // Export as high quality JPEG
      .jpeg({
        quality: 97,
        progressive: true,
        chromaSubsampling: '4:4:4', // no chroma subsampling = better color fidelity
        trellisQuantisation: true,
        overshootDeringing: true,
        optimizeScans: true,
      })
      .toFile(tmpOut);

    fs.renameSync(tmpOut, inputPath);

    const newMeta = await sharp(inputPath).metadata();
    const sizeKB = Math.round(fs.statSync(inputPath).size / 1024);
    console.log(`  ✓ Done → ${newMeta.width}x${newMeta.height} (${sizeKB} KB)`);
  }

  console.log('\n✅ All images enhanced successfully!');
}

enhanceImages().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
