import { task } from 'gulp';
import { registryTasks } from '../tasks';

export default function () {
  registryTasks();
  task('esdoc')((err) => {
    console.log('err', err);
  });
}
