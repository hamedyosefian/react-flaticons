const opentype = require('opentype.js');
const fs = require('fs');
const path = require('path');

const flatIconPath='../node_modules/@flaticon/flaticon-uicons/css'

const directoryPath = path.join(__dirname, flatIconPath);

function listWoffFiles(dirPath, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      callback(err, null);
      return;
    }

    const woffFiles = [];
    files.forEach(file => {
      if (path.extname(file).toLowerCase() === '.woff') {
        const fullPath = path.join(dirPath, file);
        woffFiles.push(file);
      }
    });
    callback(null, woffFiles);
  });
}

async function loadFont(params) {
  const buffer = await fs.promises.readFile(params.font);
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
  let dirPath = `${fontFamily}`;
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
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
      fs.writeFileSync(`${dirPath}/${glyphId}.svg`, glyphSvg);
    }
  }

  console.log(`SVG files saved successfully in the folder ${dirPath}`);
}


listWoffFiles(directoryPath, (err, woffFiles) => {
  if (err) {
    console.error('Failed to list WOFF files:', err);
  } else {
    woffFiles.map(async i => {
      let params = {
        font: `${flatIconPath}/${i}`,
        fontSize: 100,
        decimals: 1,
      };
      let font = await loadFont(params);
      await showGlyphs(font,params)
    })
  }
});

