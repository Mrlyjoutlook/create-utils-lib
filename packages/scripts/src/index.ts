#!/usr/bin/env node
import { program } from 'commander';
import build from './bin/build';
import dev from './bin/dev';
import doc from './bin/doc';
import clean from './bin/clean';

const pkg = require('../package.json');

program.version(pkg.version, '-v, --version');

program
  .command('dev')
  .option('-d, --doc [boolean]', 'build doc, default false')
  .description('compile dev, build doc and watch reload')
  .action(function (options) {
    const doc = options.doc || false;
    dev(doc);
  });

program
  .command('build')
  .option(
    '-D, --declaration [boolean]',
    'build typescript declaration file, but must use typescript, default true',
  )
  .description('build file to dist')
  .action(function (options) {
    build(options.declaration);
  });

program.command('doc').description('build doc').action(doc);

program.command('clean').description('clean generated directory').action(clean);

program.parse(process.argv);
