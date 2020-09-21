"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var target_1 = require("./target");
var utils_1 = require("../utils");
var cwd = path_1.default.resolve();
exports.default = {
    cwd: cwd,
    pkg: 'package.json',
    esTemp: path_1.default.join(cwd, 'estemp'),
    esdoc: path_1.default.join(cwd, 'esdoc'),
    src: path_1.default.join(cwd, 'src'),
    dist: path_1.default.join(cwd, 'dist'),
    distTarget: path_1.default.join(cwd, 'dist', utils_1.getModuleName(target_1.getTSConfig().module)),
    types: path_1.default.join(cwd, 'types'),
};
