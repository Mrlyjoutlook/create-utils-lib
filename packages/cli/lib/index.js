#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var commander_1 = require("commander");
var create_1 = tslib_1.__importDefault(require("./bin/create"));
var pkg = require('../package.json');
commander_1.program.version(pkg.version, '-v, --version');
commander_1.program
    .command('create <directory>')
    .option('-t, --typescript [boolean]', 'use typescript to devlop, default false')
    .description('create utils-lib project')
    .action(function (directory, options) {
    create_1.default(directory, options.typescript);
});
commander_1.program.parse(process.argv);
