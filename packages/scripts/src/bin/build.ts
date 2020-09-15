import { task, series } from 'gulp';
import { build, types } from '../tasks';

process.env.NODE_ENV = 'production';

export default function (declaration: boolean) {
  if (declaration) {
    task('build', series(build, types));
  } else {
    task('build', build);
  }
  task('build')(function () {
    console.log('build');
  });
}
