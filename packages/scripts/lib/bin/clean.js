"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = require("gulp");
var tasks_1 = require("../tasks");
function default_1() {
    gulp_1.task(tasks_1.clean);
    gulp_1.task('clean')(function () {
        console.log('clean');
    });
}
exports.default = default_1;
