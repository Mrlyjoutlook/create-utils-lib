import { src, dest } from 'gulp';
import { createProject } from 'gulp-typescript';
import { base, target } from '../config';

function types() {
  if (target.useTypeScript()) {
    const tsProject = createProject({
      ...target.getTSConfig(),
      declaration: true,
    });
    return src('src/**/**/*', { base: base.src }).pipe(tsProject()).dts.pipe(dest(base.types));
  } else {
    return Promise.resolve();
  }
}

export default types;
