// import { globIterate } from "gulp";

// const gulpImports = [];

// for await (const gulpModule of globIterate("build-scripts/gulp/*.?(c|m)js", {
//   dotRelative: true,
// })) {
//   gulpImports.push(import(gulpModule));
// }

// Since all tasks are currently registered with gulp.task(), this is enough
// If any are converted to named exports, need to loop and aggregate exports here
// await Promise.all(gulpImports);

const gulp = require('gulp');

gulp.task('develop-app', function() {
  console.log('Running the develop-app task!');

  setTimeout(function() {
    console.log('Asynchronous task completed.');
    done(); // Signal task completion
  }, 2000); // Simulate a 2-second delay
});
