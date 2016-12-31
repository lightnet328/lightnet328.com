var gulp = require("gulp");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var cssmin = require("gulp-cssmin");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("script", function() {
    gulp.src("src/scripts/**/*.js")
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest("./scripts"))
});

gulp.task("style", function() {
    gulp.src("src/styles/**/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest("./styles"))
});

gulp.task("build", ["script", "style"]);

gulp.task("default", function() {
    gulp.watch("src/scripts/**/*.js", ["script"]);
    gulp.watch("src/styles/**/*.scss", ["style"]);
});
