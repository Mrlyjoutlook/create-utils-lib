"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gulp_1 = tslib_1.__importDefault(require("gulp"));
var gulp_typescript_1 = require("gulp-typescript");
var merge = require("merge2");
function build(cb) {
    var arr = [];
    var tsProject = gulp_typescript_1.createProject("tsconfig.json", {
        declaration: false,
    });
    var tsResult = gulp_1.default.src("").pipe(tsProject());
    arr.push(tsResult.js.pipe(gulp_1.default.dest("")));
    if (process.env.NODE_ENV === "product") {
        arr.push(tsResult.dts.pipe(gulp_1.default.dest("")));
    }
    return merge(arr);
}
exports.default = build;
