"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gulp_1 = require("gulp");
var gulp_typescript_1 = require("gulp-typescript");
var config_1 = tslib_1.__importDefault(require("../config"));
var merge = require('merge2');
function build(cb) {
    var arr = [];
    var tsProject = gulp_typescript_1.createProject('tsconfig.json', {
        declaration: false,
    });
    var tsResult = gulp_1.src(config_1.default.base.src).pipe(tsProject());
    arr.push(tsResult.js.pipe(gulp_1.dest(config_1.default.base.dist)));
    if (process.env.NODE_ENV === 'product') {
        arr.push(tsResult.dts.pipe(gulp_1.dest(config_1.default.base.types)));
    }
    return merge(arr);
}
exports.default = build;
