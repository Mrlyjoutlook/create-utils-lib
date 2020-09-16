import path from 'path';
import fs from 'fs-extra';
import os from 'os';
import spawn from 'cross-spawn';

export default function create(name: string = 'helpers', useTs: boolean = false) {
  const root = path.resolve(name);
  fs.ensureDirSync(name);
  console.log(`Creating a new utils library in ${root}`);

  const packageJson = {
    name,
    version: '0.0.1',
    scripts: {
      dev: 'utils-lib-scripts dev',
      build: 'utils-lib-scripts build',
      doc: 'utils-lib-scripts doc',
    },
  };

  fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify(packageJson, null, 2) + os.EOL);

  let templateSrc = path.resolve(__dirname, '../../temp-js');
  if (useTs) {
    templateSrc = path.resolve(__dirname, '../../temp-ts');
  }

  fs.copySync(templateSrc, root);

  // cd root
  process.chdir(root);

  const args = ['add', '--exact', '@create-utils-lib/scripts'];
  if (useTs) {
    args.push('@types/node', 'typescript', 'tslib');
  }
  args.push('-D', 'cwd', root);

  const output = spawn.sync('yarn', args, { stdio: 'inherit' });
  if (output.error) {
    console.error('安装依赖失败');
    return;
  }
  console.log('Dependencies has installed');
}
