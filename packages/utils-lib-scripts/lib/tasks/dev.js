"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gulp_1 = require("gulp");
var gulp_connect_1 = tslib_1.__importDefault(require("gulp-connect"));
var config_1 = tslib_1.__importDefault(require("../config"));
function server() {
    return gulp_connect_1.default.server(tslib_1.__assign(tslib_1.__assign({}, config_1.default.env.dev.connect), { root: config_1.default.esdoc.destination }));
}
function watchFiles() {
    return gulp_1.watch(config_1.default.base.src, gulp_1.series('build', 'doc'));
}
function livereload() {
    return gulp_1.watch(config_1.default.esdoc.destination, function () { return gulp_1.src(config_1.default.base.dist).pipe(gulp_connect_1.default.reload()); });
}
function dev() {
    return gulp_1.series('build', 'doc', gulp_1.parallel(server, watchFiles, livereload));
}
exports.default = dev;
