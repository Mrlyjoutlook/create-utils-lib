"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var commander_1 = tslib_1.__importDefault(require("commander"));
var build_1 = tslib_1.__importDefault(require("./bin/build"));
var dev_1 = tslib_1.__importDefault(require("./bin/dev"));
var pkg = require("../package.json");
commander_1.default.version(pkg.version, "-v, --version");
commander_1.default.command("dev").description("build doc and watch reload").action(dev_1.default);
commander_1.default
    .command("build")
    .description("build file to dist and copy to publish branch")
    .action(build_1.default);
commander_1.default.parse(process.argv);
