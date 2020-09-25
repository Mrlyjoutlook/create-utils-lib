import path from 'path';
import { getTSConfig } from './target';
import { getModuleName } from '../utils';
const cwd = path.resolve();
const estemp = 'estemp';

export default {
  constant: {
    estemp,
  },
  cwd,
  pkg: 'package.json',
  esTemp: path.join(cwd, estemp),
  esdoc: path.join(cwd, 'esdoc'),
  src: path.join(cwd, 'src'),
  dist: path.join(cwd, 'dist'),
  distTarget: path.join(cwd, 'dist', getModuleName(getTSConfig().module)),
  types: path.join(cwd, 'types'),
};
