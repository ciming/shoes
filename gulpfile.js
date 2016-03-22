var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css'); 

gulp.task('default', function() {
	connect.server({
		root:'./build',
		livereload:false
	});
});

gulp.task('css',function(){
	
    return gulp.src('src/style/*.css')
    	.pipe(concat('main.css'))
    	.pipe(minifyCss())   
        .pipe( gulp.dest('build/style') );
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
gulp.task('image',function(){
	return gulp.src('src/**/*.{jpg,png,gif}')
		 .pipe(imagemin())
	    .pipe(gulp.dest('build'));
})

gulp.task('initjs',function(){
	return gulp.src(['src/lib/flexible.js',"src/lib/pace.min.js"])
				 .pipe(concat('init.js'))
				 .pipe(uglify())
				 .pipe(gulp.dest('build/js'))
				 
})
gulp.task('mainjs',function(){
	return gulp.src([
			//'src/js/isWeiXin.js',
			'src/lib/zepto.js',
			'src/lib/touch.js',
			'src/lib/fx.js',
		])
	 .pipe(concat('main.js'))
	 .pipe(uglify())
	 .pipe(gulp.dest('build/js'))
				 
})
gulp.task('js',function(){
	return gulp.src([
			'src/js/first.js',
			'src/js/game.js',
			'src/js/form.js'
		])
	 .pipe(uglify())
	 .pipe(gulp.dest('build/js'))
				 
})

gulp.task('watch',function(){
	gulp.watch('./src/style/*.css', ['css']);
	gulp.watch('./src/**/*.html', ['html']);
	gulp.watch('./src/**/*.{jpg,png,gif}', ['image']);
	gulp.watch('./src/js/*.js', ['js']);
})
