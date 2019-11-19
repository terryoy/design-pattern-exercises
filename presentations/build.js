var gulp = require('gulp');
var httpServer = require('http-server');
var exec = require('child_process').exec;

const build = (cb) => {
  console.log('Generate html files...');
  exec('pochani *.md');
  cb && cb();
};

const runServer = () => {
  exec('http-server .');
  exec('open http://localhost:8080/');
}


gulp.task('dev', (cb) => {
  console.log('Start presentation development...');
  build();
  runServer();
  gulp.watch(['./*.md'], build);
  cb();
});

gulp.task('export', build);
gulp.task('default', gulp.series('dev'));
