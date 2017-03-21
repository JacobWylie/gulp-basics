# treehouse-gulp-course
Code for my Treehouse Gulp.js course

<h4><a href="https://github.com/contra/gulp-concat">gulp-concat:</a> $npm install gulp-concat --save-dev</h4>
<h4><a href="https://github.com/contra/gulp-concat">gulp-rename:</a> $npm install gulp-rename --save-dev</h4>
<h4><a href="https://github.com/contra/gulp-concat">gulp-uglify:</a> $npm install gulp-uglify --save-dev</h4>
<br><br>
<p>const gulp = require('gulp'),</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;concat = require('gulp-concat'),</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;rename = require('gulp-rename'),</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;uglify = require('gulp-uglify');</p>
<br><br>
<p>gulp.task('scripts', function() {  </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;return gulp.src(jsFiles)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pipe(concat('scripts.js'))</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pipe(gulp.dest(jsDest))</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pipe(rename('scripts.min.js'))</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pipe(uglify())</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pipe(gulp.dest(jsDest));</p>
<p>});</p>





<h4><a href="https://github.com/dlmanning/gulp-sass">Gulp Sass plugin</a></h4>


