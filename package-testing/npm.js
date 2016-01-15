// This example shows a possibility to use NPM modules in a test

// package.js can have different NPM dependencies and use NPM modules
Npm.depends({
    'fs-extra': '0.16.5'
});

// then in a test file called npm.js (for server test of course)
Tinytest.add('NPM modules - checking availability of npm', function (test) {
  var fs = Npm.require('fs');
  test.equal(typeof fs.readFile, 'function', 'Expected readFile to be available in NPM package');
});
