# Auto Refresh html
 rodar os comandos 
 npm i --save-dev browser-sync gulp-nodemon

coloque este codigo no seu arquivo gulpfile.js

e rode gulp start ele ira automaticamente abrir o google chrome na pagina localhost:4000
e todas as alteracoes no htmk css ou javascript ele altomaticamente recarrega a pagina
```js
//Gulpfile.js
var gulp = require('gulp'),  
    browserSync = require('browser-sync'),
    nodemon = require('gulp-nodemon');

// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
var BROWSER_SYNC_RELOAD_DELAY = 500;

//tarefas para startar server e auto atualizar o navegador
gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'server.js',
    env: { 'NODE_ENV': 'development' },
    watch: ['*']
  })
    .on('start', function onStart () {
      if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart () {
      // reload connected browsers after a slight delay
      setTimeout(function reload () {
        browserSync.reload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

gulp.task('browser-sync', ['nodemon'], function () {
  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync({
    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:3000',
    // informs browser-sync to use the following port for the proxied app
    // notice that the default port is 3000, which would clash with our expressjs
    port: 4000
  });
});

gulp.task('js', function () {
  return gulp.src('public/**/*.js');
});

gulp.task('css', function () {
  return gulp.src('public/**/*.css')
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});
//rodar comando gulp start
gulp.task('start', ['browser-sync'], function () {
  gulp.watch('public/**/*.js', ['js', browserSync.reload]);
  gulp.watch('public/**/*.css', ['css']);
  gulp.watch('public/**/*.html', ['bs-reload']);
});

```