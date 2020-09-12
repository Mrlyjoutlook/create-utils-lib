"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gulp_1 = tslib_1.__importDefault(require("gulp"));
var build_1 = tslib_1.__importDefault(require("./build"));
// import dev from "./dev";
gulp_1.default.task(build_1.default);
// gulp.task(dev);
