'use strict';

var gulp   = require('gulp');
var config = require('../config');
var changed    = require('gulp-changed');

// move assets
gulp.task('docs_copy',  function () {
  return gulp.src("docs/**/**/**/**/**")
      .pipe(changed("docs/**/**/**/**/**")) // Ignore unchanged files
      .pipe(gulp.dest('dist/docs'))

});
gulp.task('docs', function () {

    return gulp.src(config.docs.src)
      .pipe(gulp.dest(config.docs.dest))
      .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
  
  });
  