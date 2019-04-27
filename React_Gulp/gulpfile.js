/// <binding BeforeBuild='default' />
var browserify = require("browserify");
var gulp = require("gulp");
var babel = require("gulp-babel");
var streamify = require("gulp-streamify");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var watchify = require("watchify");

var tsProject = ts.createProject("tsconfig.json");

var path = {
    MINIFIED_OUT: "build.min.js",
    OUT: "build.js",
    DEST: "./dist",
    DEST_SRC: "./dist/src",
    DEST_BUILD: "./dist/build",
    ENTRY_POINT: "./src/App.js"
}

gulp.task("minify-js", async function () {
    browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
    })
        .bundle()
        .pipe(source(path.MINIFIED_OUT))
        .pipe(buffer())
        .pipe(babel({
            presets: [
                "@babel/preset-env"
            ]
        }))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task("transpile-tsx", async function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("src"));
});

gulp.task("default", gulp.parallel("transpile-tsx", "minify-js"));