import { task } from 'gulp';
import { esdoc } from '../tasks';

export default function () {
  task(esdoc);
  task('doc')(function () {
    console.log('doc');
  });
}
