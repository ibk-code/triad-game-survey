process.env.ABRAIA_KEY = 'NWM2MDA0ZDg3NjAwMDAwMDpNTVZIZkVRV0ZiS2xsTnQxejdLcm5YZGQ0enl3Y3dtZQ=='

const { series, parallel, src, dest, watch} = require('gulp');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const cache = require('gulp-cache')
const abraia = require('gulp-abraia')
const server = browserSync.create();


function writeHtml() {
  return src('src/*.html')
    .pipe(dest('dist'))
}

function sassToCss () {
  return src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

function image () {
  return src('src/img/*')
    .pipe(cache(abraia()))
    .pipe(dest('dist/img'))
}

function image () {
  return src('src/sound/*')
    .pipe(dest('dist/sound'))
}

function webpackcall () {
    return src('dist/')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(dest('dist/'));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './dist'
      // index: "index.html"
    },

    port: 8080,
    open: true,
    notify: false,
    // startPath: "/html"
  })

  watch("src/scss/*.scss").on('change', browserSync.reload);
  watch("src/*.html").on('change', browserSync.reload);
  done();
}

const watchFile = () => {
  watch('src/*.html', {ignoreInitial: false}, series(writeHtml, reload))
  watch('src/scss/*.scss', {ignoreInitial: false}, series(sassToCss, reload))
  watch('src/*.js', {ignoreInitial: false}, series(webpackcall, reload))
}

const dev = series(
  serve,
  image, 
  watchFile
);

exports.default = dev;
