var config = require('../config')
var gulp = require('gulp')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')
var pug = require('gulp-pug');
var cache    = require('gulp-cache');
var cached   = require('gulp-cached');
var remember = require('gulp-remember');
var changedInPlace = require('gulp-changed-in-place');
const debug = require('gulp-debug');

gulp.task('views', ['pug'])

// compile our pug
gulp.task('pug', () => {
  return gulp
    .src(config.views.src)
   // .pipe(cache('pug'))
   // .pipe(cached('pug'))
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(pug())
   // .pipe(remember('pug'))
    .pipe(gulp.dest(config.dist.root))
})


gulp.task('pug_cache', () => {
    return gulp
      .src(config.views.src)
      .pipe(changedInPlace({ howToDetermineDifference: "modification-time" }))
      .pipe(debug({title: 'files:'}))
      .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
      .pipe(pug({ pretty: true }))
     
      .pipe(gulp.dest(config.dist.root))
  })
  