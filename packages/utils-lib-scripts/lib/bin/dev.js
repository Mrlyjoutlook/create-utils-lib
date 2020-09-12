"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gulp_1 = tslib_1.__importDefault(require("gulp"));
require("../tasks");
process.env.NODE_ENV = "development";
function default_1() {
    gulp_1.default.task("dev")(function (err) {
        console.log("err", err);
    });
}
exports.default = default_1;
