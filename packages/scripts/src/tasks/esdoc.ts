import path from 'path';
import ESDoc from 'esdoc';
import fse from 'fs-extra';
import { esdoc, base } from '../config';

let esdocConfig = {};

const exists = fse.pathExistsSync(path.join(base.cwd, 'esdoc.js'));
if (exists) {
  esdocConfig = fse.readJSONSync(path.join(base.cwd, 'esdoc.js'));
}

function doc(cb: () => void) {
  ESDoc.generate({ ...esdoc, ...esdocConfig });
  cb();
}

export default doc;
