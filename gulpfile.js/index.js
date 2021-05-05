const { bumpVersion, pushToGithub } = require('./github');
const { autoUploadToHubspot } = require('./webpack');
const { src, dest, series, parallel, watch } = require('gulp');
const mode = require('gulp-mode')();
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const message = require('gulp-message');
const tableFlip = message.logger({ prefix: '(ノಠ益ಠ)ノ彡┻━┻' });
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function deleteDistFolder() {
  return src('dist', { read: false, allowEmpty: true }).pipe(clean());
}

function convertScssToCss() {
  return src('src/**/*.scss', { base: 'src' })
    .pipe(sass())
    .pipe(mode.production(autoprefixer()))
    .pipe(mode.production(cleanCSS({ compatibility: 'ie11' })))
    .pipe(
      rename(function(path) {
        if (path.dirname == 'scss') {
          path.dirname = 'css';
        }
        if (path.dirname == 'scss/templates') {
          path.dirname = 'css/templates';
        }
      })
    )
    .pipe(dest('dist'));
}

function copyAndMoveHtmlFiles() {
  return src('src/**/*.html', { base: 'src' }).pipe(dest('dist'));
}

function copyAndMoveImages() {
  return src('src/images/**/*', { base: 'src' }).pipe(dest('dist'));
}

function copyAndMoveJson() {
  return src('src/**/*.json', { base: 'src' }).pipe(dest('dist'));
}

exports.default = function() {
  watch(
    'src/**/*',
    { ignoreInitial: false },
    series(
      deleteDistFolder,
      parallel(
        copyAndMoveHtmlFiles,
        convertScssToCss,
        copyAndMoveJson,
        copyAndMoveImages
      ),
      autoUploadToHubspot
    )
  );
};

exports.push = series(
  deleteDistFolder,
  parallel(
    copyAndMoveHtmlFiles,
    convertScssToCss,
    copyAndMoveJson,
    copyAndMoveImages
  ),
  autoUploadToHubspot,
  bumpVersion,
  pushToGithub
);
