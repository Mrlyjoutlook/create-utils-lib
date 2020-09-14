"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registryTasks = void 0;
var tslib_1 = require("tslib");
var gulp_1 = require("gulp");
var build_1 = tslib_1.__importDefault(require("./build"));
var dev_1 = tslib_1.__importDefault(require("./dev"));
var clean_1 = tslib_1.__importDefault(require("./clean"));
var esdoc_1 = tslib_1.__importDefault(require("./esdoc"));
var types_1 = tslib_1.__importDefault(require("./types"));
function registryTasks() {
    gulp_1.task(build_1.default);
    gulp_1.task(dev_1.default);
    gulp_1.task(clean_1.default);
    gulp_1.task(esdoc_1.default);
    gulp_1.task(types_1.default);
}
exports.registryTasks = registryTasks;
