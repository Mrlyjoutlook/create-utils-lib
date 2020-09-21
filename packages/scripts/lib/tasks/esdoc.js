"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var esdoc_1 = tslib_1.__importDefault(require("esdoc"));
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var config_1 = require("../config");
var esdocConfig = {};
var exists = fs_extra_1.default.pathExistsSync(path_1.default.join(config_1.base.cwd, 'esdoc.js'));
if (exists) {
    esdocConfig = fs_extra_1.default.readJSONSync(path_1.default.join(config_1.base.cwd, 'esdoc.js'));
}
function doc(cb) {
    esdoc_1.default.generate(tslib_1.__assign(tslib_1.__assign({}, config_1.esdoc), esdocConfig));
    cb();
}
exports.default = doc;
