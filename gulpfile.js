var gulp = require('gulp');
var express = require('express');
var webpack = require('webpack-stream');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');
var path = require('path');
var log4js = require('log4js');
var sass = require('gulp-sass');
var injectLivereload = require('connect-livereload');
var _ = require('lodash');


var logger = log4js.getLogger();
logger.level = "dev";

gulp.task('webpack', function(){
  let config = {
    output:{filename:'bundle.js'},
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style!css' },
      ],
    },
  }
  return gulp.src('src/_js/app.js')
    .pipe(webpack(config))
    .on('error', function(error) {
      logger.error(error.static)
      this.emit('end');
    })
    .pipe(gulp.dest('src/scripts'))
    .pipe(livereload());
})

gulp.task('reloadCss', function(){
  return gulp.src('src/styles/main.css')
    .pipe(livereload());
})

//Start a web server on port 8282 to server the src app
gulp.task('server', function() {
  let app = express();
  app.use(injectLivereload())
  app.use(express.static(path.join(__dirname, "src")));
  let server = app.listen(8282, ()=> {
    logger.info(`Server started http://localhost:${server.address().port}`)
  });
});

gulp.task('watch', function () {
    livereload.listen(); // Starts livereload
    gulp.watch(['src/_js/**/*.js', 'src/**/*.html'], ['webpack'])
    gulp.watch(['src/**/*.css', 'src/**/*.scss'], ['sass'])
    gulp.watch(['src/styles/main.css'], ['reloadCss'])
});

gulp.task('sass', function () {
  return gulp.src('./src/_scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles'));
});

//Default task which simply servers the source files
gulp.task('default', ['start']);

gulp.task('start', ()=>{
  return runSequence('webpack', 'server', 'watch');
})