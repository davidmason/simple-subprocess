var spawn = require('child_process').spawn;

module.exports = function (cmd) {
  if ('win32' === process.platform) {
    child = spawn('cmd.exe', ['/s', '/c', '"' + cmd + '"'], {
      windowsVerbatimArguments: true
    });
  } else {
    // Calling the shell directly allows glob expansion
    child = spawn('/bin/sh', ['-c', cmd], {
      cwd: process.cwd(),
      stdio: 'inherit'
    });
  }
  return child;
}
