"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = require("gulp");
require("../tasks");
process.env.NODE_ENV = 'production';
function default_1() {
    gulp_1.task('build')(function (err) {
        console.log('err', err);
    });
}
exports.default = default_1;
