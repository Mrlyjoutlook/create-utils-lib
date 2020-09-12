import { watch, series, parallel, src } from "gulp";
import connect from "gulp-connect";
import { createProject } from "gulp-typescript";
import gulpIf from "gulp-if";
import config from "../config";

function server() {
  return connect.server({
    ...config.env.connect,
    root: config.esdoc.destination,
  });
}

function watchFiles() {
  return watch(config.base.src, series("build", "doc"));
}

function livereload() {
  return watch(config.esdoc.destination, () =>
    src(config.base.dist).pipe(connect.reload())
  );
}

function dev() {
  return series("build", "doc", parallel(server, watchFiles, livereload));
}

export default dev;
