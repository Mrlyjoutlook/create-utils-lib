import path from 'path';
import target from './target';
const cwd = process.cwd();
const appPackage = require(path.join(cwd, 'package.json'));

export default {
  useTypeScript: appPackage.devDependencies['typescript'] !== null,
  cwd,
  pkg: 'package.json',
  esTemp: path.join(cwd, 'estemp'),
  esdoc: path.join(cwd, 'esdoc'),
  src: path.join(cwd, 'src'),
  dist: path.join(cwd, 'dist', target.tsconfig.module),
  types: path.join(cwd, 'types'),
};
