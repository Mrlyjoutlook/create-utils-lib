import { watch, series, src } from 'gulp';
import connect from 'gulp-connect';
import { build, esdoc } from '../tasks';
import * as config from '../config';

export function server() {
  return connect.server({
    ...config.env.dev.connect,
    root: config.esdoc.destination,
  });
}

export function watchSrcFiles() {
  return watch(config.base.src, build);
}

export function watchFiles() {
  return watch(config.base.src, series(build, esdoc));
}

export function livereload() {
  return watch(config.esdoc.destination, function () {
    return src(config.target.useTypeScript() ? config.base.esTemp : config.base.dist).pipe(
      connect.reload(),
    );
  });
}
