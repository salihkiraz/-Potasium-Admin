'use strict'

var gulp = require('gulp')
var config = require('../config')
var mainBowerFiles = require('gulp-main-bower-files')

gulp.task('copy', function () {
  // Copy bower components into 'public/js/libs'
  return gulp
    .src('./bower.json')
    .pipe(
      mainBowerFiles({
        overrides: config.copy.overrides
      })
    )
    .pipe(gulp.dest(config.dist.root + '/libs'))
})
