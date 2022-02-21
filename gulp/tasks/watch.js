'use strict';

var config = require('../config');
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('watch',['browserSync'], function () {
  gulp.watch(config.scripts.src, function () { runSequence('javascript', 'reload') });
  gulp.watch(config.styles.src,  function () { runSequence('styles', 'reload') });
  gulp.watch(config.styles.themes_combiner,  function () { runSequence('styles_extra', 'reload') });
  gulp.watch(config.images.src, function () { runSequence('images', 'reload') });
  gulp.watch(config.views.watch, function () { runSequence('pug_cache', 'reload') });
  gulp.watch(config.views.watch_base, function () { runSequence('pug', 'reload') });
  gulp.watch(config.css.watch, function () { runSequence('css', 'reload') });
  gulp.watch(config.assets.src, function () { runSequence('assets_copy', 'reload') });
  gulp.watch(config.docs.src, function () { runSequence('docs_copy', 'reload') });
});
