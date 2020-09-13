import { task } from 'gulp';
import '../tasks';

export default function () {
  task('doc')((err) => {
    console.log('err', err);
  });
}
