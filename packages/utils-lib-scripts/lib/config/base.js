"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var target_1 = tslib_1.__importDefault(require("./target"));
var cwd = process.cwd();
exports.default = {
    cwd: cwd,
    pkg: 'package.json',
    esTemp: path_1.default.join(cwd, 'temp'),
    esdoc: path_1.default.join(cwd, 'esdoc'),
    src: path_1.default.join(cwd, 'src'),
    dist: path_1.default.join(cwd, 'dist', target_1.default.tsconfig.module),
    types: path_1.default.join(cwd, 'types'),
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
