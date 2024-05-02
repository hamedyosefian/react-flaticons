const opentype = require('opentype.js');
const fs = require('fs');
const path = require('path');

const flatIconPath='../src/assets'
const directoryPath = path.join(__dirname, flatIconPath);

async function listWoffFiles(dirPath) {
  try {
    const files = await fs.promises.readdir(dirPath);
    return files.filter(file => path.extname(file).toLowerCase() === '.woff');
  } catch (err) {
    console.error('Error reading directory:', err);
    throw err;
  }
}

async function loadFont(fontPath) {
  const buffer = await fs.promises.readFile(fontPath);
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  return opentype.parse(arrayBuffer);
}


async function showGlyphs(font,params) {
  let unitsPerEm = font.unitsPerEm;
  let ratio = params.fontSize / unitsPerEm;
  let ascender = font.ascender;
  let descender = Math.abs(font.descender);
  let glyphs = font.glyphs.glyphs;
  let keys = Object.keys(glyphs).length;

  let fontFamily = font.tables.name.fontFamily.en.replaceAll(" ", "_").replaceAll(".", "_");
  let outputPath = path.join(__dirname, '../src/svgs',fontFamily) ;

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  for (let i = 0; i < keys; i++) {
    let glyph = glyphs[i];
    let lineHeight = (ascender + descender) * ratio;
    let glyphW = glyph.advanceWidth * ratio;
    let posX = 0;

    let pathData = glyph.getPath(posX, ascender * ratio, params.fontSize).toPathData(params.decimals);
    let glyphId = glyph.name ? glyph.name.replaceAll(".", "_") : glyph.unicode ? glyph.unicode : glyph.index;

    if (pathData) {
      let glyphSvg = `<svg xmlns="http://www.w3.org/2000/svg" id="icon_${glyphId}" viewBox="0 0 ${glyphW.toFixed(params.decimals)} ${lineHeight.toFixed(params.decimals)}"><path d="${pathData}" id="path_${glyphId}" /></svg>`;
      fs.writeFileSync(`${outputPath}/${glyphId}.svg`, glyphSvg);
    }
  }

  console.log(`SVG files saved successfully in the folder ${outputPath}`);
}



(async () => {
  try {
    const woffFiles = await listWoffFiles(directoryPath);
    for (const file of woffFiles) {
      const params = { font: path.join(directoryPath, file), fontSize: 100, decimals: 1 };
      const font = await loadFont(params.font);
      await showGlyphs(font,params)
      // const fontFamily = font.tables.name.fontFamily.en.replaceAll(" ", "_").replaceAll(".", "_");
      // await showGlyphs(font, params, fontFamily);
    }
  } catch (error) {
    console.error('Error processing WOFF files:', error);
  }
})();