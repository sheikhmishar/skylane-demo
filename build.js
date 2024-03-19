const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");
const outDir = path.join(__dirname, "out");

const srcAssetsDir = path.join(srcDir, "assets");
const outAssetsDir = path.join(outDir, "assets");

const titleIndex = [];

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

/** @type {ejs.Options} */
const ejsOptions = { root: srcDir, beautify: true, rmWhitespace: true };

module.exports.build = async (
  backendUrl = "http://localhost:3000/",
  buildDir = outDir
) => {
  try {
    fs.cpSync(srcAssetsDir, outAssetsDir, { recursive: true });
    const ejsFiles = readFilesRecursive(srcDir).filter(
      (v) =>
        !v.includes("_components") &&
        !v.includes("assets") &&
        v.endsWith(".ejs")
    );

    console.log(ejsFiles, ejsFiles.length);
    const db = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../db.json")).toString()
    );

    let errorCount = 0;

    for await (const ejsFile of ejsFiles) {
      try {
        const outHtml = path.resolve(
          ejsFile.replace(srcDir, buildDir).replace(".ejs", ".html")
        );

        const outHtmlDir = path.dirname(outHtml);

        if (!fs.existsSync(outHtmlDir))
          fs.mkdirSync(outHtmlDir, { recursive: true });

        const ejsFileDir = path
          .dirname(ejsFile)
          .replace(path.join(__dirname, "src"), "")
          .concat(path.sep);

        const renderResult = await ejs.renderFile(
          ejsFile,
          {
            ejsFile,
            ejsFileDir,
            db,
            backendUrl,
          },
          ejsOptions
        );
        console.log([outHtml, outHtmlDir, renderResult.substring(0,10)]);

        fs.writeFileSync(outHtml, renderResult);
        titleIndex.push({
          url: ejsFileDir,
          title: renderResult
            .match(/<title>(.*?)<\/title>/gm)[0]
            .replace("<title>", "")
            .replace("</title>", ""),
        });
      } catch (error) {
        console.error(error);
        errorCount++;
      }
    }
    fs.writeFileSync(
      path.join(outDir, "index.json"),
      JSON.stringify(titleIndex)
    );
    return !errorCount;
  } catch (error) {
    console.error("BUILD ERROR", error);
    return false;
  }
};
