const opentype = require('opentype.js');
const fs = require('fs');
const JSZip = require('jszip');

let params = {

  string: 'عباس',

  font: './my.woff',

  fontSize: 100,

  decimals: 1,

  singleGlyphs: false,

};
async function loadFont() {
  // Read the file into a Buffer.
  const buffer = await fs.promises.readFile(params.font);

  // Convert Buffer to ArrayBuffer.
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);

  // Parse the ArrayBuffer with opentype.js.
  return opentype.parse(arrayBuffer)
}


async function showGlyphs(font) {
  let unitsPerEm = font.unitsPerEm;
  let ratio = params.fontSize / unitsPerEm;
  let ascender = font.ascender;
  let descender = Math.abs(font.descender);
  let glyphs = font.glyphs.glyphs;
  let keys = Object.keys(glyphs).length;
  let htmlOutput = "";
  let useMarkup = "";
  let zip = new JSZip();

  for (let i = 0; i < keys; i++) {
    let glyph = glyphs[i];
    let lineHeight = (ascender + descender) * ratio;
    let leftSB = glyph.leftSideBearing * ratio;
    let rightSB = (glyph.advanceWidth - glyph.xMax) * ratio;
    let glyphW = glyph.advanceWidth * ratio;
    let posX = 0;

    if (glyph.advanceWidth + leftSB < 0) {
      glyphW = Math.abs(leftSB) + Math.abs(glyph.advanceWidth) + Math.abs(rightSB);
      posX = Math.abs(leftSB);
    }

    let pathData = glyph.getPath(posX, ascender * ratio, params.fontSize).toPathData(params.decimals);
    let glyphId = glyph.name ? glyph.name.replaceAll(".", "_") : glyph.unicode ? glyph.unicode : glyph.index;

    if (pathData) {
      let glyphSvg = `<svg xmlns="http://www.w3.org/2000/svg" id="icon_${glyphId}" viewBox="0 0 ${+glyphW.toFixed(2)} ${+lineHeight.toFixed(2)}"><path d="${pathData}" id="path_${glyphId}" /></svg>`;
      zip.file(`svgs/icon_${glyphId}.svg`, glyphSvg);

      htmlOutput += `<symbol id="symbol_${glyphId}" data-id="${glyph.index}" viewBox="0 0 ${+glyphW.toFixed(2)} ${+lineHeight.toFixed(2)}"><path d="${pathData}" id="path_${glyphId}" /></symbol>`;
      useMarkup += `<svg id="use_wrap_${glyphId}"  viewBox="0 0 ${+glyphW.toFixed(2)} ${+lineHeight.toFixed(2)}"><use href="#symbol_${glyphId}" /></svg>`;
    }
  }

  let fontFamily = font.tables.name.fontFamily.en.replaceAll(" ", "_").replaceAll(".", "_");
  htmlOutput = `<svg xmlns="http://www.w3.org/2000/svg" id="sprite_${fontFamily}" style="width:0; height:0; position:absolute; overflow:hidden;">` + htmlOutput + `</svg>`;
  htmlOutput += useMarkup;

  let htmlDoc = `<html><head><style>body{font-family:sans-serif}svg{height: 5em;border: 1px solid #ccc;display: inline-block;}</style></head><body><h1>${fontFamily}: sprite</h1>${htmlOutput}</body></html>`;
  zip.file(`index.html`, htmlDoc);

  let blob = await zip.generateAsync({ type: "nodebuffer" });
  fs.writeFile(`sprite_${fontFamily}.zip`, blob, function(err) {
    if (err) {
      console.error('Error saving the ZIP file:', err);
    } else {
      console.log('ZIP file saved successfully!');
    }
  });
}

loadFont().then(font=>showGlyphs(font))
