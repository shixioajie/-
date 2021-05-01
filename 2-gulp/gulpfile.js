
const { src, dest, series, watch } = require("gulp");
const plugins = require("gulp-load-plugins")();
const del = require("del");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
// 处理js
function js(cd) {
  // 链式调用处理 js文件下的所有.js 文件，
  src("js/*.js")
    .pipe(plugins.uglify())
    .pipe(dest("./dist/js"))
    .pipe(reload({
      stream: true
    }));
  cd();//执行这个回调函数是为了告知gulp这个内容已经执行完毕了，不写每次编译都会warning。
}

// 对 css scss文件进行处理
function css(cd) {
  src("css/*.scss")
    .pipe(plugins.sass({ outputStyle: "compressed" }))
    .pipe(plugins.autoprefixer({ cascade: false, remove: false }))
    .pipe(dest("./dist/css"))
    .pipe(reload({ stream: true }));
  cd()
}

// 监听文件变化
function watcher(cd) {
  watch('./js/*.js', js);
  watch('./css/*.scss', css);
  cd()
}

//删除dist文件内容
function clean(callback) {
  // del("./dist");
  callback();
}

// 热模块更新
function serve(cd) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
  cd()
}

exports.scripts = js; // npx gulp scripts 执行函数
exports.styles = css;
exports.clean = clean;

exports.default = series([
  clean,
  css,
  js,
  serve,
  watcher
])