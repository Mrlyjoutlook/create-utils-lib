import { src, dest } from 'gulp';
import { createProject } from 'gulp-typescript';
import gulpIf from 'gulp-if';
import { target, base } from '../config';

const tsconfig = target.getTSConfig();

function build() {
  const tsProject = createProject({
    ...tsconfig,
    module: 'es6',
    declaration: false,
  });

  const tsProjectWithJs = createProject({
    ...tsconfig,
    allowJs: true,
    declaration: false,
  });

  return src('src/**/**/*', {
    base: base.src,
  })
    .pipe(gulpIf(target.useTypeScript(), tsProject()))
    .pipe(dest(base.esTemp))
    .pipe(tsProjectWithJs())
    .pipe(dest(base.distTarget));
}

export default build;
