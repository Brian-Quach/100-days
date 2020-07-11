const gulp = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

gulp.task("process-scss", function () {
  return gulp
    .src("./scss/main.scss", {allowEmpty: true})
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .on("error", sass.logError)
    .pipe(gulp.dest("./css"));
});

gulp.task("watch", function () {
  gulp.watch("./scss/**/*.scss", gulp.parallel("process-scss"));
});

gulp.task("build", gulp.parallel("process-scss"));

exports.default = defaultTask;
