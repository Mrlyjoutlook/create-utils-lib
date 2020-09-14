import { task } from 'gulp';
import { registryTasks } from '../tasks';

process.env.NODE_ENV = 'production';

export default function () {
  registryTasks();
  task('build')((err) => {
    console.log('err', err);
  });
}
