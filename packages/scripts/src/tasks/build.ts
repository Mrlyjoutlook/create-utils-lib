import { src, dest } from 'gulp';
import { createProject } from 'gulp-typescript';
import gulpIf from 'gulp-if';
import config from '../config';

function build() {
  const tsProject = createProject({
    ...config.target.tsconfig,
    module: 'es6',
    declaration: false,
  });

  const tsProjectWithJs = createProject({
    ...config.target.tsconfig,
    allowJs: true,
    declaration: false,
  });

  return src('src/**/**/*', {
    base: config.base.src,
  })
    .pipe(gulpIf(config.base.useTypeScript, tsProject()))
    .pipe(dest(config.base.esTemp))
    .pipe(tsProjectWithJs())
    .pipe(dest(config.base.dist));
}

export default build;
