import uglify from "gulp-uglify";
import rename from "gulp-rename";

export const js = () => {
	return app.gulp
		.src(app.path.src.js, { sourcemap: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "JS",
					message: "Error: <%= error.message %>",
				}),
			),
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				uglify({
					toplevel: true,
					sourceMap: true,
				}),
			)
		)
		.pipe(
			rename({
				extname: ".min.js",
			}),
		)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}