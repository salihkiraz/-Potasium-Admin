'use strict'

var gulp = require('gulp')
var runSequence = require('run-sequence')

gulp.task('dev', ['clean'], function (cb) {
  global.isProd = false

  runSequence(['styles', 'javascript', 'images', 'copy', 'views', 'assets_copy'], 'watch', cb)
  // runSequence('watch', cb);
})

gulp.task('dev-cache', ['clean'], function (cb) {
  global.isProd = false

  runSequence('styles', 'javascript', 'images', 'copy', 'views-cache', 'assets_copy', 'docs_copy', 'watch-cache', 'browserSync', cb)
  // runSequence('watch', cb);
})
