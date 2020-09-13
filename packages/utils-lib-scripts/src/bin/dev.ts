import { task } from 'gulp';
import '../tasks';

process.env.NODE_ENV = 'development';

export default function () {
  task('dev')((err) => {
    console.log('err', err);
  });
}
