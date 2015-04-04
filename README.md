# simple-subprocess

Run a subprocess as though you had typed it into the shell.

## Features

 - Runs a command from the current working directory.
 - Pipes all output to standard outputs.
 - Preserves colours in output.
 - Expands wildcards as if the command were run in the shell directly.
 - Works for interactive commands (passes standard input to the subprocess).
 - Returns a [ChildProcess](https://nodejs.org/api/child_process.html) object
   that can have events attached.

Note that the environment for the subprocess may not include things like bash
aliases, so behaviour will differ for aliased commands. If you get different
behaviour, try `type` in your shell to see the real command:

```
[shell]$ type grep
grep is aliased to `grep --color=auto'

```

I can use `grep --color=auto` as my command and get the same behaviour as on
the interactive shell.


## Usage

Run a command, then do something when it exits.

```
var exec = require('simple-subprocess');

console.log('Finding function definitions');

exec('grep --color=auto "function (" **/*.js')
  .on('exit', function (code) {
    console.log('\nFinished search with exit code %s', code);
  });
```

The function returns a ChildProcess, so see
[documentation for ChildProcess](https://nodejs.org/api/child_process.html)
for other events and details.