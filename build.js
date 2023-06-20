const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");
const outDir = path.join(__dirname, "out");

const srcAssetsDir = path.join(srcDir, "assets");
const outAssetsDir = path.join(outDir, "assets");

fs.cpSync(srcAssetsDir, outAssetsDir, { recursive: true });

/**
 * @param {string} dir
 * @param {string[]} files */
function readFilesRecursive(dir, files = []) {
  fs.readdirSync(dir).forEach(function (file) {
    const f = path.join(dir, path.sep, file);
    if (fs.statSync(f).isDirectory()) files = readFilesRecursive(f, files);
    else files.push(f);
  });

  return files;
}

const ejsFiles = readFilesRecursive(srcDir).filter(
  (v) =>
    !v.includes("_components") && !v.includes("assets") && v.endsWith(".ejs")
);

console.log(ejsFiles, ejsFiles.length);

ejsFiles.forEach((ejsFile) => {
  const outHtml = path.resolve(
    ejsFile.replace(srcDir, outDir).replace(".ejs", ".html")
  );

  const outHtmlDir = path.dirname(outHtml);
  console.log([outHtml, outHtmlDir]);

  if (!fs.existsSync(outHtmlDir)) fs.mkdirSync(outHtmlDir, { recursive: true });

  ejs
    .renderFile(
      ejsFile,
      {
        ejsFile,
        ejsFileDir: path
          .dirname(ejsFile)
          .replace(path.join(__dirname, "src"), "")
          .concat(path.sep),
      },
      {
        root: srcDir,
        beautify: true,
        rmWhitespace: true,
      }
    )
    .then((v) => fs.writeFileSync(outHtml, v))
    .catch(console.error);
});
