"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = require("gulp");
var tasks_1 = require("../tasks");
process.env.NODE_ENV = 'production';
function default_1(declaration) {
    if (declaration) {
        gulp_1.task('build', gulp_1.series(tasks_1.build, tasks_1.types));
    }
    else {
        gulp_1.task('build', tasks_1.build);
    }
    gulp_1.task('build')(function () {
        console.log('build');
    });
}
exports.default = default_1;
