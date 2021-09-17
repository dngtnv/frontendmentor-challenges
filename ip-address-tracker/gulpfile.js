const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const terser = require('gulp-terser');
const concat = require('gulp-concat');

const scssPath = 'src/assets/scss/*.scss';
const jsPath = 'src/assets/js/*.js';
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask() {
  return src(scssPath, { sourcemaps: true })
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist/assets/css', { sourcemaps: '.' }));
}

// JS Task
function jsTask() {
  return src(jsPath, { sourcemaps: true })
    .pipe(concat('script.js'))
    .pipe(terser())
    .pipe(dest('dist/assets/js', { sourcemaps: '.' }));
}

//Browsersync Task
function browsersyncServe(callback) {
  browsersync.init({
    server: {
      baseDir: '.',
    },
  });
  callback();
}

function browsersyncReload(callback) {
  browsersync.reload();
  callback();
}

// Watch Task
function watchTask() {
  watch('*.html', browsersyncReload);
  watch([scssPath, jsPath], series(scssTask, jsTask, browsersyncReload));
}

// Default Gulp Task
exports.default = series(parallel(scssTask, jsTask, browsersyncServe), watchTask);
