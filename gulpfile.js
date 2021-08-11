'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/styles'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel['sass']);
};