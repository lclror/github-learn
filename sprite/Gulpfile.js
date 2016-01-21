var gulp=require('gulp')
var compass=require('gulp-compass')

gulp.task('sprite',function(){
	gulp.src('sprite01/sprite01.scss')
		.pipe(compass({
			css:'sprite01',
			scss:'sprite01',
			image:'sprite01',	
		}))
})