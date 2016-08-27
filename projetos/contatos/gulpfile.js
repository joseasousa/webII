var jshint = require('gulp-jshint')
    , gulp = require('gulp')
    , img = require('gulp-imagemin')
    , concat = require('gulp-concat')
    , htmlReplace = require('gulp-html-replace')
<<<<<<< HEAD
    , uglify = require('gulp-uglify')
    , usemin = require('gulp-usemin');
=======
    , uglify = require('gulp-uglify');
>>>>>>> master

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

<<<<<<< HEAD

gulp.task('usemin', function() {
  return gulp.src('public/**/*.html')
    .pipe(usemin({
      js: [uglify]
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('default', ['lint', 'build-img', 'usemin']);
=======
gulp.task('build-js', function () {
    gulp.src(['public/vendor/angular/angular.js',
        'public/vendor/angular-route/angular-route.js'
        , 'public/js/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build-html', ['build-js'], function () {
    gulp.src('public/**/*.html')
        .pipe(htmlReplace({
            'js': 'js/main.js'
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['lint', 'build-img', 'build-html']);
>>>>>>> master
