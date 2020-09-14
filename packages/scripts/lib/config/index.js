"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = tslib_1.__importDefault(require("./base"));
var target_1 = tslib_1.__importDefault(require("./target"));
var esdoc_1 = tslib_1.__importDefault(require("./esdoc"));
var env_1 = tslib_1.__importDefault(require("./env"));
exports.default = {
    base: base_1.default,
    target: target_1.default,
    esdoc: esdoc_1.default,
    env: env_1.default,
};
