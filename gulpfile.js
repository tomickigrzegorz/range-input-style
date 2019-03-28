const gulp = require("gulp");
const postcss = require('gulp-postcss');

function script() {
  return gulp
    .src('src/*.js')
    .pipe(gulp.dest('build/'))
}

function styles() {
  return gulp
    .src('src/**/*.css')
    .pipe(postcss([
      require('autoprefixer'),
      require('postcss-input-range')
    ]))
    .pipe(gulp.dest('build/'))
}

function watch() {
  gulp.watch('src/*.js', script);
  gulp.watch('src/**/*.css', styles);
}

const build = gulp.parallel(script, styles, watch);

exports.watch = watch;
exports.build = build;