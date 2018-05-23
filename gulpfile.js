var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');
var _ = require('lodash');

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
    .on('error', function() {
      this.emit('end');
    })
    .pipe(gulp.dest('src/scripts'))
    .pipe(livereload());
})

//Start a web server on port 8282 to server the src app
gulp.task('server', function() {
  connect.server({
      root: 'src/',
      port: 8282
  });
});

gulp.task('watch', function () {
    livereload.listen(); // Starts livereload

    gulp.watch(['src/_js/**/*.js', 'src/**/*.html'], ['webpack'])
});

//Default task which simply servers the source files
gulp.task('default', ['start']);

gulp.task('start', ()=>{
  return runSequence('webpack', 'server', 'watch');
})