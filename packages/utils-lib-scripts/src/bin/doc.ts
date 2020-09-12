import gulp from "gulp";
import "../tasks";

export default function () {
  gulp.task("doc")((err) => {
    console.log("err", err);
  });
}
