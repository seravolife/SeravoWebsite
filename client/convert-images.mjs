import sharp from 'sharp';
import { readdirSync, unlinkSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const imagesDir = './src/assets/images';
const exts = ['.png', '.jpg', '.jpeg'];

const files = readdirSync(imagesDir).filter(f => exts.includes(extname(f).toLowerCase()));

console.log(`Found ${files.length} images to convert...`);

for (const file of files) {
  const inputPath = join(imagesDir, file);
  const outputPath = join(imagesDir, basename(file, extname(file)) + '.webp');

  if (existsSync(outputPath)) {
    console.log(`Skipping ${file} — .webp already exists`);
    continue;
  }

  try {
    await sharp(inputPath)
      .webp({ quality: 82 })
      .toFile(outputPath);

    const inputSize = (await import('fs')).statSync(inputPath).size;
    const outputSize = (await import('fs')).statSync(outputPath).size;
    const savings = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);

    console.log(`✓ ${file} → ${basename(outputPath)} (saved ${savings}%)`);

    // Delete original
    unlinkSync(inputPath);
    console.log(`  ✗ Deleted ${file}`);
  } catch (err) {
    console.error(`✗ Failed to convert ${file}:`, err.message);
  }
}

console.log('\nDone! All images converted to WebP.');
