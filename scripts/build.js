import fs from "node:fs";

const babelModule = { exports: {} };
Function("module", "exports", fs.readFileSync("./vendor/babel.min.js", "utf8"))(babelModule, babelModule.exports);
const Babel = babelModule.exports;

const source = fs.readFileSync("./src/App.jsx", "utf8");
const output = Babel.transform(source, { presets: ["env", "react"] }).code;
fs.writeFileSync("./src/App.compiled.js", output);
