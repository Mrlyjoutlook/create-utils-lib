import { watch, series, parallel, src } from 'gulp';
import connect from 'gulp-connect';
import config from '../config';

function server() {
  return connect.server({
    ...config.env.dev.connect,
    root: config.esdoc.destination,
  });
}

function watchFiles() {
  return watch(config.base.src, series('build', 'esdoc'));
}

function livereload() {
  return watch(config.esdoc.destination, () => src(config.base.dist).pipe(connect.reload()));
}

function dev() {
  return series('build', 'esdoc', parallel(server, watchFiles, livereload));
  // return series('build');
}

export default dev;
