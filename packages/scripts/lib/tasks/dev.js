"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livereload = exports.watchFiles = exports.watchSrcFiles = exports.server = void 0;
var tslib_1 = require("tslib");
var gulp_1 = require("gulp");
var gulp_connect_1 = tslib_1.__importDefault(require("gulp-connect"));
var tasks_1 = require("../tasks");
var config = tslib_1.__importStar(require("../config"));
function server() {
    return gulp_connect_1.default.server(tslib_1.__assign(tslib_1.__assign({}, config.env.dev.connect), { root: config.esdoc.destination }));
}
exports.server = server;
function watchSrcFiles() {
    return gulp_1.watch(config.base.src, tasks_1.build);
}
exports.watchSrcFiles = watchSrcFiles;
function watchFiles() {
    return gulp_1.watch(config.base.src, gulp_1.series(tasks_1.build, tasks_1.esdoc));
}
exports.watchFiles = watchFiles;
function livereload() {
    return gulp_1.watch(config.esdoc.destination, function () {
        return gulp_1.src(config.target.useTypeScript() ? config.base.esTemp : config.base.dist).pipe(gulp_connect_1.default.reload());
    });
}
exports.livereload = livereload;
