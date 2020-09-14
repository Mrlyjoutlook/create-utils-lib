"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dev_1 = tslib_1.__importDefault(require("./dev"));
var prod_1 = tslib_1.__importDefault(require("./prod"));
exports.default = {
    dev: dev_1.default,
    prod: prod_1.default,
};
