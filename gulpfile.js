var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var notify = require('gulp-notify');


gulp.task('js', function () {
     return gulp.src(['scripts/jquery-1.11.3.min.js','scripts/angular.1.4.6.js','scripts/services/testService.js','scripts/app.js','scripts/services/chatService.js','scripts/directives/maxlinesDirective.js','scripts/directives/drag.js','scripts/lib/angular-sanitize.js','scripts/lib/en_US.js','scripts/lib/spin.min.js','scripts/lib/jquery.spin.js','scripts/lib/jquery-ui-1.10.4.min.js','scripts/controllers/chatController.js']) //select all javascript files under js/ and any subdirectory
         .pipe(concat('app.min.js')) //the name of the resulting file
         //.pipe(minify())
         .pipe(gulp.dest('dest')) //the destination folder
         .pipe(notify({ message: 'Finished minifying JavaScript'}));
});