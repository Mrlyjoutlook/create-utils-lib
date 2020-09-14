#!/usr/bin/env node
import { program } from 'commander';
import build from './bin/build';
import dev from './bin/dev';

const pkg = require('../package.json');

program.version(pkg.version, '-v, --version');

program.command('dev').description('build doc and watch reload').action(dev);

program.command('build').description('build file to dist and copy to publish branch').action(build);

program.parse(process.argv);
