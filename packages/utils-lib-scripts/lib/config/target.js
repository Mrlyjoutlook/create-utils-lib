"use strict";
// const path =require('path');
// const fs = require('fs-extra');
// const base = require('./base');
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
var path_1 = tslib_1.__importDefault(require("path"));
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var base_1 = tslib_1.__importDefault(require("./base"));
var tsconfig = {
    target: 'ES5',
    module: 'commonjs',
    moduleResolution: 'Node',
    importHelpers: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    allowJs: false,
    strict: true,
    sourceMap: false,
    declaration: false,
    resolveJsonModule: true,
    lib: ['esnext'],
    baseUrl: './',
    paths: {
        '@/*': ['src/*'],
    },
};
var target = process.env.target || tsconfig.module || 'commonjs';
var exit = fs_extra_1.default.pathExistsSync(path_1.default.resolve(base_1.default.cwd, 'tsconfig.json'));
if (exit) {
    var tsconfigJson = fs_extra_1.default.readJSONSync(path_1.default.resolve(base_1.default.cwd, 'tsconfig.json'));
    tsconfig = tslib_1.__assign(tslib_1.__assign({}, tsconfig), tsconfigJson.compilerOptions);
}
exports.default = {
    tsconfig: tslib_1.__assign(tslib_1.__assign({}, tsconfig), { module: target }),
};
