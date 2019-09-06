var gulp = require("gulp");
var ts = require("gulp-typescript");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript", function() {
  return tsProject
    .src()
    .pipe(ts(tsProject))
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
  gulp.watch("src/*.ts", gulp.series("typescript"));
});

gulp.task("default", gulp.series("watch"));
