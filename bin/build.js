const opentype = require('opentype.js');
const fs = require('fs');

async function loadFont() {
  // Read the file into a Buffer.
  const buffer = await fs.promises.readFile('./my.woff');

  // Convert Buffer to ArrayBuffer.
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);

  // Parse the ArrayBuffer with opentype.js.
  const font = opentype.parse(arrayBuffer);
  console.log(font);
}

loadFont();
