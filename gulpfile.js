const gulp = require('gulp')
const frontMatter = require('gulp-front-matter')
const marked = require('gulp-marked')
const layout1 = require('layout1')

gulp.task('pages', () => (
  gulp.src('source/**/*.md')
    .pipe(frontMatter({ property: 'data' }))
    .pipe(marked())
    .pipe(layout1.ejs(file => `source/layout/${file.data.layout || 'default'}.ejs`))
    .pipe(gulp.dest('build'))
))
