const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'node_modules', '@flaticon', 'flaticon-uicons', 'css');
const destDir = path.join(__dirname, '..', 'src', 'assets');

// Function to delete directory
function deleteDirectory(directory) {
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach((file) => {
      const curPath = path.join(directory, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteDirectory(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directory);
  }
}

// Function to copy directory
function copyDirectory(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach((element) => {
    const srcElement = path.join(src, element);
    const destElement = path.join(dest, element);
    if (fs.lstatSync(srcElement).isDirectory()) {
      copyDirectory(srcElement, destElement);
    } else {
      fs.copyFileSync(srcElement, destElement);
    }
  });
}

// Perform operations
deleteDirectory(destDir);
copyDirectory(srcDir, destDir);
