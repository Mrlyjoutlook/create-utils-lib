import gulp from "gulp";
import path from "path";
import ESDoc from "esdoc";
import fse from "fs-extra";
import config from "../config";

let esdocConfig = {};

const exists = fse.pathExistsSync(path.resolve(config.base.cwd, "esdoc.json"));
if (exists) {
  esdocConfig = fse.readJSONSync(path.resolve(config.base.cwd, "esdoc.json"));
}

function doc(cb: () => void) {
  ESDoc.generate({ ...config.esdoc, ...esdocConfig });
  cb();
}

export default doc;
