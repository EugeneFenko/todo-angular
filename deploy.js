var ghpages = require('gh-pages');
ghpages.publish('dist', {
  repo: 'git@github.com:EugeneFenko/todo-angular.git'
}, err => {
  console.log(err);
});
