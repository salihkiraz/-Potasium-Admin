'use strict'

var config = require('../config')

var gulp = require('gulp')

var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')
var pngquant = require('imagemin-pngquant')

gulp.task('images', ['img'])

// make img size smaller
gulp.task('img', () => {
  return gulp
    .src(config.images.src)
    .pipe(
      cache(
        imagemin({
          interlaced: true,
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          use: [pngquant()]
        })
      )
    )
    .pipe(gulp.dest(config.dist.img))
})
