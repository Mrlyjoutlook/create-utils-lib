import { task } from 'gulp';
import { esdoc } from '../tasks';

export default function () {
  task(esdoc);
  task('esdoc', function () {
    console.log('esdoc');
  });
}
