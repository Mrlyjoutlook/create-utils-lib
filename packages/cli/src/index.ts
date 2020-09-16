#!/usr/bin/env node
import { program } from 'commander';
import create from './bin/create';

const pkg = require('../package.json');

program.version(pkg.version, '-v, --version');

program
  .command('create <directory>')
  .option('-t, --typescript [boolean]', 'use typescript to devlop, default false')
  .description('create utils-lib project')
  .action(function (directory, options) {
    create(directory, options.typescript);
  });

program.parse(process.argv);
