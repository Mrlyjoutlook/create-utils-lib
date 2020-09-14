import { task } from 'gulp';
import '../tasks';

process.env.NODE_ENV = 'production';

export default function () {
  task('build')((err) => {
    console.log('err', err);
  });
}
