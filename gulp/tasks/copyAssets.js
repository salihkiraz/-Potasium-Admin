'use strict'

var gulp = require('gulp')
var config = require('../config')
var gulpif = require('gulp-if')
const minify = require('gulp-minify')

// move assets
gulp.task('assets_copy', ['assets'])

// copy fonts
gulp.task('assets', () => {
  return gulp.src(config.assets.src).pipe(gulp.dest(config.assets.dest))
})
