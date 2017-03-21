'use strict';

const gulp = require('gulp');

gulp.task('hello', () => {
	console.log('hello world');
});

gulp.task('default', ['hello'], () => {
	console.log('this is the defualt task');
});