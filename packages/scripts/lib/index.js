#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var commander_1 = require("commander");
var build_1 = tslib_1.__importDefault(require("./bin/build"));
var dev_1 = tslib_1.__importDefault(require("./bin/dev"));
var doc_1 = tslib_1.__importDefault(require("./bin/doc"));
var clean_1 = tslib_1.__importDefault(require("./bin/clean"));
var pkg = require('../package.json');
commander_1.program.version(pkg.version, '-v, --version');
commander_1.program
    .command('dev')
    .option('-d, --doc [boolean]', 'build doc, default false')
    .description('compile dev, build doc and watch reload')
    .action(function (options) {
    var doc = options.doc || false;
    dev_1.default(doc);
});
commander_1.program
    .command('build')
    .option('-D, --declaration [boolean]', 'build typescript declaration file, but must use typescript, default true')
    .description('build file to dist')
    .action(function (options) {
    build_1.default(options.declaration);
});
commander_1.program.command('doc').description('build doc').action(doc_1.default);
commander_1.program.command('clean').description('clean generated directory').action(clean_1.default);
commander_1.program.parse(process.argv);
