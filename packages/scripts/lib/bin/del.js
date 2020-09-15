"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = require("gulp");
function default_1() {
    gulp_1.task('del')(function (err) {
        console.log('err', err);
    });
}
exports.default = default_1;
