var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', function() {
	connect.server({
		root:'./src',
		livereload:false
	});
});

gulp.task('css',function(){
	
    return gulp.src('src/**/*.css')
        .pipe( gulp.dest('build/') );
})

gulp.task('html',function(){
	return gulp.src('src/**/*.html') 
	    .pipe(gulp.dest('build'));
})

gulp.task('js',function(){
	return gulp.src('src/**/*.js')
		.pipe(plumber())
	  	.pipe(changed('build'))    
	    .pipe(gulp.dest('build'));
})