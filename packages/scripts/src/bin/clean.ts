import { task } from 'gulp';
import { clean } from '../tasks';

export default function () {
  task(clean);
  task('clean')(function () {
    console.log('clean');
  });
}
