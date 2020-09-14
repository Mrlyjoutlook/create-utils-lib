"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gulp_1 = require("gulp");
var gulp_typescript_1 = require("gulp-typescript");
var gulp_if_1 = tslib_1.__importDefault(require("gulp-if"));
var config_1 = tslib_1.__importDefault(require("../config"));
function build() {
    var tsProject = gulp_typescript_1.createProject(tslib_1.__assign(tslib_1.__assign({}, config_1.default.target.tsconfig), { module: 'es6', declaration: false }));
    var tsProjectWithJs = gulp_typescript_1.createProject(tslib_1.__assign(tslib_1.__assign({}, config_1.default.target.tsconfig), { allowJs: true, declaration: false }));
    return gulp_1.src('src/**/**/*', {
        base: config_1.default.base.src,
    })
        .pipe(gulp_if_1.default(config_1.default.base.useTypeScript, tsProject()))
        .pipe(gulp_1.dest(config_1.default.base.esTemp))
        .pipe(tsProjectWithJs())
        .pipe(gulp_1.dest(config_1.default.base.dist));
}
exports.default = build;
