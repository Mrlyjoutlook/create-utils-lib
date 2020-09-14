import path from 'path';
import target from './target';

const cwd = process.cwd();

export default {
  cwd,
  pkg: 'package.json',
  esTemp: path.join(cwd, 'temp'),
  esdoc: path.join(cwd, 'esdoc'),
  src: path.join(cwd, 'src'),
  dist: path.join(cwd, 'dist', target.tsconfig.module),
  types: path.join(cwd, 'types'),
};

// const distCwd = process.cwd();
// const target = process.env.target || tsconfig.module || "commonjs";
// const appPackage = require(path.join(distCwd, "package.json"));
// appPackage.devDependencies = appPackage.devDependencies || {};

// module.exports = {
//   useTypeScript: appPackage.devDependencies["typescript"] != null,
//   distCwd,
//   pkg: "package.json",
//   curCwd: path.resolve(__dirname, "../../"),
//   src: path.join(distCwd, "src"),
//   config: path.join(__dirname, "../config"),
//   template: path.join(__dirname, "../../docs-template"),
//   esTemp: path.join(distCwd, "temp"),
//   dist: path.join(distCwd, "dist", target),
//   publishCache: path.join(distCwd, ".publish"),
//   docCache: path.join(distCwd, ".docs"),
//   static: ["README.md", ".gitignore"],
//   types: path.join(distCwd, "typings"),
// };
