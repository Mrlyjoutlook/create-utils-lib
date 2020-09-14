"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var del_1 = tslib_1.__importDefault(require("del"));
var config_1 = tslib_1.__importDefault(require("../config"));
function clean(cb) {
    del_1.default([config_1.default.base.esTemp, config_1.default.base.dist, config_1.default.esdoc.destination]);
    cb();
}
exports.default = clean;
