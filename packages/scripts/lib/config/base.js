"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var target_1 = tslib_1.__importDefault(require("./target"));
var cwd = process.cwd();
var appPackage = require(path_1.default.join(cwd, 'package.json'));
exports.default = {
    useTypeScript: appPackage.devDependencies['typescript'] !== null,
    cwd: cwd,
    pkg: 'package.json',
    esTemp: path_1.default.join(cwd, 'estemp'),
    esdoc: path_1.default.join(cwd, 'esdoc'),
    src: path_1.default.join(cwd, 'src'),
    dist: path_1.default.join(cwd, 'dist', target_1.default.tsconfig.module),
    types: path_1.default.join(cwd, 'types'),
};
