"use strict";
// const path =require('path');
// const fs = require('fs-extra');
// const base = require('./base');
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsconfig = {
    target: 'es5',
    module: 'commonjs',
    moduleResolution: 'node',
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
// const exit = fse.pathExistsSync(path.resolve(base.cwd, 'tsconfig.json'));
// if (exit) {
//   const tsconfigJson = fse.readJSONSync(path.resolve(base.cwd, 'tsconfig.json'));
//   tsconfig = { ...tsconfig, ...tsconfigJson.compilerOptions };
// }
exports.default = {
    tsconfig: tslib_1.__assign(tslib_1.__assign({}, tsconfig), { module: target }),
};
