import { src, dest } from 'gulp';
import { createProject } from 'gulp-typescript';
import config from '../config';

const merge = require('merge2');

function build(cb: (arg0: string) => void) {
  const arr = [];

  const tsProject = createProject('tsconfig.json', {
    declaration: false,
  });
  const tsResult = src(config.base.src).pipe(tsProject());

  arr.push(tsResult.js.pipe(dest(config.base.dist)));
  if (process.env.NODE_ENV === 'product') {
    arr.push(tsResult.dts.pipe(dest(config.base.types)));
  }

  return merge(arr);
}

export default build;
