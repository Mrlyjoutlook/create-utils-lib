// const path =require('path');
// const fs = require('fs-extra');
// const base = require('./base');

// let tsconfig = {
//   "alwaysStrict": true,
//   "target": "es6",
//   "moduleResolution": "node",
//   "allowSyntheticDefaultImports": true,
//   "declaration": false,
//   "sourceMap": false,
//   "importHelpers": true,
//   "baseUrl": ".",
// };
// const configName = 'tsconfig.json';
// const exists = fs.pathExistsSync(path.resolve(base.distCwd, configName));
// if (exists) {
//   const tsconfigJson = require(path.join(base.distCwd, configName));
//   tsconfig = { ...tsconfig, ...tsconfigJson.compilerOptions };
// }

// const target = process.env.target || tsconfig.module || 'commonjs';

// module.exports = {
//   tsconfig: { ...tsconfig, module: target },
//   branch: `publish/${target}`,
//   prefix: target === 'commonjs' ? null : `-${target}`,
// };

import path from "path";
import fse from "fs-extra";
import base from "./base";

let tsconfig = {
  target: "ES5",
  module: "commonjs",
  moduleResolution: "Node",
  importHelpers: true,
  esModuleInterop: true,
  allowSyntheticDefaultImports: true,
  allowJs: false,
  strict: true,
  sourceMap: false,
  declaration: false,
  resolveJsonModule: true,
  lib: ["esnext"],
  baseUrl: "./",
  paths: {
    "@/*": ["src/*"],
  },
};

const target = process.env.target || tsconfig.module || "commonjs";

const exit = fse.pathExistsSync(path.resolve(base.cwd, "tsconfig.json"));
if (exit) {
  const tsconfigJson = fse.readJSONSync(
    path.resolve(base.cwd, "tsconfig.json")
  );
  tsconfig = { ...tsconfig, ...tsconfigJson.compilerOptions };
}

export default {
  tsconfig: {
    ...tsconfig,
    module: target,
  },
};
