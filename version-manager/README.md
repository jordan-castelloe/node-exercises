## Version Manager
An early assignment to practice accessing the global process object in Node.js (and practice ES6 tricks!) for Nashville Software School

### [Instructions](https://github.com/nashville-software-school/bangazon-corp/blob/master/orientation/resources/04-nodejs_versions.md)

Create a JavaScript file to act as a Node.js program named `node-version.js`. The file
should be similar if not exactly the same as the previous exercise. However,
run `nvm use` and change the Node.js version and make sure it works correctly in
multiple versions.

Expected:

```bash
$ nvm use node
Now using node v6.3.1 (npm v3.10.5)
$ ./node-version.js
Node.js version: v6.3.1
V8 version: 5.0.71.57
$ nvm use v4
Now using node v4.4.7 (npm v3.10.5)
$ ./node-version.js
Node.js version: 4.4.7
V8 version: 4.5.103.36
```

## To Run
To install nvm, run:
- ``curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash``
- ``export NVM_DIR="$HOME/.nvm"``
- ``[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"``

To switch to differnet versions of node, run:
- `` nvm install [node version]``
- `` nvm use [node version]``

To run the file and see if it works:
- `` node node-version.js``

To go back to using the most recent version of node when you're done:
- ``nvm use node --lts``
- `` nvm uninstall [node version]``