import { src, dest } from 'gulp';
import { createProject } from 'gulp-typescript';
import config from '../config';

function types() {
  if (config.base.useTypeScript) {
    const tsProject = createProject({
      ...config.target.tsconfig,
      declaration: true,
    });
    return src('src/**/**/*', { base: config.base.src })
      .pipe(tsProject())
      .dts.pipe(dest(config.base.types));
  } else {
    return Promise.resolve();
  }
}

export default types;
