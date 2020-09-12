import gulp from "gulp";
import "../tasks";

process.env.NODE_ENV = "development";

export default function () {
  gulp.task("dev")((err) => {
    console.log("err", err);
  });
}
