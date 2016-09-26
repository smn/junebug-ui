var gulp = require('gulp');

gulp.task('default', function() {

  var connect  = require('connect');
  var static = require('serve-static');
  livereload = require('livereload');

  var server = connect();
  server.use(static(__dirname));
  server.listen(3000);

  server = livereload.createServer();
  server.watch(__dirname);

});
