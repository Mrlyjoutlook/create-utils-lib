"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gulp_1 = require("gulp");
var gulp_typescript_1 = require("gulp-typescript");
var gulp_if_1 = tslib_1.__importDefault(require("gulp-if"));
var config_1 = require("../config");
var tsconfig = config_1.target.getTSConfig();
function build() {
    var tsProject = gulp_typescript_1.createProject(tslib_1.__assign(tslib_1.__assign({}, tsconfig), { module: 'es6', declaration: false }));
    var tsProjectWithJs = gulp_typescript_1.createProject(tslib_1.__assign(tslib_1.__assign({}, tsconfig), { allowJs: true, declaration: false }));
    return gulp_1.src('src/**/**/*', {
        base: config_1.base.src,
    })
        .pipe(gulp_if_1.default(config_1.target.useTypeScript(), tsProject()))
        .pipe(gulp_1.dest(config_1.base.esTemp))
        .pipe(tsProjectWithJs())
        .pipe(gulp_1.dest(config_1.base.distTarget));
}
exports.default = build;
