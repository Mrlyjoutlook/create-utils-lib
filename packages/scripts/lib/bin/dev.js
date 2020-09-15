"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = require("gulp");
var tasks_1 = require("../tasks");
process.env.NODE_ENV = 'development';
function default_1(doc) {
    if (doc) {
        gulp_1.task('dev', gulp_1.series(tasks_1.build, tasks_1.esdoc, gulp_1.parallel(tasks_1.server, tasks_1.watchFiles, tasks_1.livereload)));
    }
    else {
        gulp_1.task('dev', gulp_1.series(tasks_1.build, tasks_1.watchSrcFiles));
    }
    gulp_1.task('dev')(function () {
        console.log('dev');
    });
}
exports.default = default_1;
