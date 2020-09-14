import { task } from 'gulp';
import build from './build';
import dev from './dev';
import clean from './clean';
import esdoc from './esdoc';
import types from './types';

export function registryTasks() {
  task(build);
  task(dev);
  task(clean);
  task(esdoc);
  task(types);
}
