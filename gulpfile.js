var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    // clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    cp = require('child_process');
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('styles', function() {
  return gulp.src('assets/css/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./assets/css'))
    .pipe(gulp.dest('static/assets/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src('assets/js/*.js')
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('javascripts'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('javascripts'))
    .pipe(gulp.dest('static/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('clean', function() {
  return gulp.src(['stylesheets', 'javascripts'], {read: false})
    .pipe(clean());
});

// gulp.task('imagemin-dev', function () {
//     return gulp.src(['assets/wp-content/uploads/**/*'], {base: 'assets'})
//     .pipe(imagemin({
//             progressive: true,
//             use: [pngquant()]
//         }))
//         .pipe(gulp.dest('static/assets'));
// });
gulp.task('imagemin-dev', function () {
    return gulp.src('assets/img/*/*')
        .pipe(gulp.dest('static/assets/img'));
});

gulp.task('imagemin-dist', function () {
    return gulp.src('assets/img/*/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('static/assets/img'));
});

gulp.task('watch', function() {
  // Watch .sass files
  gulp.watch('./assets/css/*.scss', ['styles']);
  // Watch .js files
  gulp.watch('./assets/js/*.js', ['scripts']);
  // Watch img files
  //gulp.watch('./assets/img/*', ['imagemin-dist']);
  gulp.watch('./assets/img/*/*', ['imagemin-dist']);
});

gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'imagemin-dist','watch');
});