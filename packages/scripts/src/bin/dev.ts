import { task } from 'gulp';
import { registryTasks } from '../tasks';

process.env.NODE_ENV = 'development';

export default function () {
  registryTasks();
  task('dev')((err) => {
    console.log('err', err);
  });
}
