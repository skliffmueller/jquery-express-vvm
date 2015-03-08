var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

var SRC = 'public/less/styles.less';
var BUILD = 'public/css/';
var LIB = __dirname+'/public/lib/';
console.log(__dirname);
var options = {};

gulp.task('less', function () {
    return gulp.src(['node_modules/bootstrap/less/bootstrap.less',SRC])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest(BUILD));
});

gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/requirejs/require.js', 'node_modules/requirejs-text/text.js'])
        .pipe(gulp.dest('public/lib/'))
    gulp.src(['node_modules/bootstrap/fonts/*'])
        .pipe(gulp.dest('public/fonts/'))
});