
import webp from 'gulp-webp';
import gulpAvif from 'gulp-avif';
import imagemin from 'gulp-imagemin';

export const images = () => {
	return (
		app.gulp
			.src(app.path.src.images)
			.pipe(
				app.plugins.plumber(
					app.plugins.notify.onError({
						title: "IMAGES",
						message: "Error: <%= error.message %>",
					}),
				),
			)
			.pipe(app.gulp.src(app.path.src.images))
			.pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images)))
			.pipe(
				app.plugins.if(
					app.isBuild,
					imagemin({
						progressive: true,
						svgoPlugins: [{ removeViewBox: false }],
						interlaced: true,
						optimizationLevel: 3,
					}),
				),
			)
			.pipe(app.gulp.dest(app.path.build.images))
			.pipe(app.gulp.src(app.path.src.svg))
			.pipe(app.gulp.dest(app.path.build.images))
			.pipe(app.gulp.src(app.path.src.images))
			.pipe(app.plugins.newer(app.path.build.images))
			.pipe(gulpAvif())
			.pipe(app.gulp.dest(app.path.build.avif))
			.pipe(app.plugins.newer(app.path.build.avif))
			.pipe(app.gulp.src(app.path.src.images))
			.pipe(webp())
			.pipe(app.gulp.dest(app.path.build.webp))
			.pipe(app.plugins.browsersync.stream())
	);
}