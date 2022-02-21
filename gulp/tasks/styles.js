'use strict'

var config = require('../config')
var gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')
var scss = require('gulp-sass')
var cssnano = require('gulp-cssnano')
var themesCombiner = require('gulp-sass-themes-combiner')
var rename = require('gulp-rename')
var gulpif = require('gulp-if')
var browserSync = require('browser-sync')

gulp.task('styles', ['scss', 'scss-manify', 'sass-theme', 'css'])

// compile our scss
gulp.task('scss', () => {
  return gulp
    .src(config.styles.minifysrc)
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(scss())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write('app.css'))
    .pipe(gulp.dest(config.styles.dest))
})

// scss minify
gulp.task('scss-manify', () => {
  return gulp
    .src(config.styles.minifysrc)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(scss())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.styles.dest))
})

// Loop sass theme files and output separately.
gulp.task('sass-theme', function () {
  var themesComb = themesCombiner(config.styles.themes_combiner)
  return gulp
    .src(config.styles.minifysrc)
    .pipe(themesComb.init())
    .pipe(scss.sync().on('error', scss.logError))
    .pipe(themesComb.combine('potasium'))
    .pipe(gulp.dest(config.styles.dest_theme))
})

gulp.task('css', function () {
  return gulp.src(config.css.src).pipe(gulp.dest(config.css.dest))
})
