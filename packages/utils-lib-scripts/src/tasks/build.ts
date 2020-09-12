import gulp from "gulp";
import { createProject } from "gulp-typescript";
var merge = require("merge2");

function build(cb: (arg0: string) => void) {
  const arr = [];

  const tsProject = createProject("tsconfig.json", {
    declaration: false,
  });
  const tsResult = gulp.src("").pipe(tsProject());

  arr.push(tsResult.js.pipe(gulp.dest("")));
  if (process.env.NODE_ENV === "product") {
    arr.push(tsResult.dts.pipe(gulp.dest("")));
  }

  return merge(arr);
}

export default build;
