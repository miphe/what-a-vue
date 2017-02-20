var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    pump = require('pump');

gulp.task('scripts', function (cb) {
  pump([
      gulp.src(['./scripts/filters.js', './scripts/mixins.js', './scripts/components.js', './scripts/app.js']),
      concat('bundle.min.js'),
      uglify(),
      gulp.dest('./dist/')
    ],
    cb
  );
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./scripts/*.js', './*.html'], ['scripts', 'html']);
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('default', ['scripts', 'watch', 'connect']);
