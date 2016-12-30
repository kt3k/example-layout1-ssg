const bulbo = require('bulbo')
const asset = bulbo.asset
const frontMatter = require('gulp-front-matter')
const marked = require('gulp-marked')
const layout1 = require('layout1')

asset('source/**/*.md')
  .pipe(frontMatter({ property: 'data' }))
  .pipe(marked())
  .pipe(layout1.ejs(file => `source/layout/${file.data.layout || 'default'}.ejs`))
