'use strict'

var config = require('../config')
var gulp = require('gulp')
const minify = require('gulp-minify')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')

gulp.task('javascript', ['js'])

// compile es6 to es5 with babel and minify
gulp.task('js', () => {
  return gulp
    .src(config.scripts.src)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(
      minify({
        ext: {
          min: '.min.js'
        },
        ignoreFiles: ['-min.js']
      })
    )
    .pipe(gulp.dest(config.scripts.dest))
  
})
