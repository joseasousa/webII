var jshint = require('gulp-jshint'),
  gulp = require('gulp'),
  img = require('gulp-imagemin'),
  uglify = require('gulp-uglify'),
  usemin = require('gulp-usemin')
  cssmin = require('gulp-cssmin');

gulp.task('lint', function () {
  return gulp.src('public/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('build-img', function () {
  gulp.src('public/img/*')
    .pipe(img())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', function () {
  return gulp.src('public/**/*.html')
    .pipe(usemin({
      js: [uglify],
      css: [cssmin] 
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'build-img', 'usemin']);
