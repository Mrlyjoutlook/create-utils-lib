import { task, series, parallel } from 'gulp';
import { build, esdoc, server, watchSrcFiles, watchFiles, livereload } from '../tasks';

process.env.NODE_ENV = 'development';

export default function (doc: boolean) {
  if (doc) {
    task('dev', series(build, esdoc, parallel(server, watchFiles, livereload)));
  } else {
    task('dev', series(build, watchSrcFiles));
  }
  task('dev')(function () {
    console.log('dev');
  });
}
