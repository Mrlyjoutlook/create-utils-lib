"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = require("gulp");
require("../tasks");
function default_1() {
    gulp_1.task('doc')(function (err) {
        console.log('err', err);
    });
}
exports.default = default_1;
