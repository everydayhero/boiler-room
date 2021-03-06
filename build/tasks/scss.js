const gulp = require('gulp')
const path = require('path')
const sass = require('gulp-sass')

const config = require('./config')
const SOURCE_DIR = config.SOURCE_DIR
const DEV_DIR = config.DEV_DIR

module.exports = () => {
  return gulp.src(path.join(SOURCE_DIR, '**/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(DEV_DIR))
}
