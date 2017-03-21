'use strict';

const gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps');

gulp.task('scripts', () => {
	gulp.src([ 
		'js/jquery.js',
		'js/sticky/jquery.sticky.js',
		'js/main.js'])
	.pipe(maps.init())
	.pipe(maps.write('./'))
	.pipe(concat('app.js'))
	.pipe(gulp.dest('js'))
	.pipe(rename('app.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js'));
});

gulp.task('compileSass', () => {
	gulp.src('scss/application.scss')
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('css'));
});

gulp.task('default', ['scripts', 'compileSass'], () => {
	console.log('this is the defualt task');
});