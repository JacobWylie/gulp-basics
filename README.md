<img src="https://github.com/gulpjs/artwork/blob/master/gulp.png?raw=true" alt="gulp logo">
<h1>Gulp Stuff</h1>

<h4><a href="https://github.com/contra/gulp-concat">gulp-concat:</a> $npm install gulp-concat --save-dev</h4>
<h4><a href="https://github.com/hparra/gulp-rename">gulp-rename:</a> $npm install gulp-rename --save-dev</h4>
<h4><a href="https://github.com/terinjokes/gulp-uglify">gulp-uglify:</a> $npm install gulp-uglify --save-dev</h4>
<h4>Article: <a href="https://alistapart.com/article/better-javascript-minification">Better JavaScript Minification</a></h4>
<br>
<p>const gulp = require('gulp'),</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;concat = require('gulp-concat'),</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;rename = require('gulp-rename'),</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;uglify = require('gulp-uglify');</p>
<br>
<p>gulp.task('scripts', function() {  </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;return gulp.src(jsFiles)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pipe(concat('scripts.js'))</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pipe(gulp.dest(jsDest))</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pipe(rename('scripts.min.js'))</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pipe(uglify())</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pipe(gulp.dest(jsDest));</p>
<p>});</p>
<br><br>

<h4>:telescope:<a href="https://github.com/dlmanning/gulp-sass">Gulp Sass plugin: </a>$npm install gulp-sass --save-dev</h4>
<h4>:telescope:<a href="http://thesassway.com/intermediate/using-source-maps-with-sass">Using source maps with Sass 3.3</a></h4>
<h4>:telescope:<a href="https://github.com/floridoo/gulp-sourcemaps">gulp-sourcemaps</a></h4>



