import path from 'path';
import ESDoc from 'esdoc';
import fse from 'fs-extra';
import config from '../config';

let esdocConfig = {};

const exists = fse.pathExistsSync(path.join(config.base.cwd, 'esdoc.js'));
if (exists) {
  esdocConfig = fse.readJSONSync(path.join(config.base.cwd, 'esdoc.js'));
}
console.log('esdocConfig', esdocConfig);
console.log(config.esdoc);

function esdoc() {
  ESDoc.generate({ ...config.esdoc, ...esdocConfig });
  return Promise.resolve();
}

export default esdoc;
