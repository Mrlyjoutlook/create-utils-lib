"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gulp_1 = tslib_1.__importDefault(require("gulp"));
require("../tasks");
function default_1() {
    gulp_1.default.task("doc")(function (err) {
        console.log("err", err);
    });
}
exports.default = default_1;
