'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', [ 'clean' ], function(cb) {
	cb = cb || function() {};

	global.isProd = true;

	//  runSequence('styles', 'javascript', /*'images', */ 'copy', 'views', 'assets_copy',  cb);
	runSequence('styles', 'javascript', 'images', 'copy', 'views','docs_copy', 'assets_copy', cb);
});
