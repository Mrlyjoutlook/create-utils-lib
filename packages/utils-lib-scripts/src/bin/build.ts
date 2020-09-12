import gulp from "gulp";
import "../tasks";

process.env.NODE_ENV = "production";

export default function () {
  gulp.task("build")((err) => {
    console.log("err", err);
  });
}
