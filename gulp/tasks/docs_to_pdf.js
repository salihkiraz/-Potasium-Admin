var gulp = require('gulp');
var markdownpdf = require('gulp-markdown-pdf');
var concat = require('gulp-concat');

gulp.task('docs-pdf', function () {
  return gulp.src('./docs/guide/!(_sidebar)*.md')
    .pipe(concat('./docs/docs.pdf'))
    .pipe(markdownpdf())
    .pipe(gulp.dest('dist'));
});