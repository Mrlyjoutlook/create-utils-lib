"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gulp_1 = require("gulp");
var gulp_typescript_1 = require("gulp-typescript");
var config_1 = require("../config");
function types() {
    if (config_1.target.useTypeScript()) {
        var tsProject = gulp_typescript_1.createProject(tslib_1.__assign(tslib_1.__assign({}, config_1.target.getTSConfig()), { declaration: true }));
        return gulp_1.src('src/**/**/*', { base: config_1.base.src }).pipe(tsProject()).dts.pipe(gulp_1.dest(config_1.base.types));
    }
    else {
        return Promise.resolve();
    }
}
exports.default = types;
