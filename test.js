var exec = require('./index.js');

console.log('\nOutput from simple-subprocess:')
exec('grep --color=auto "function (" *.js').on('exit', function () {
  console.log('\nOutput should be the same from shell and '
            + 'simple-subprocess, including colours.');
});
