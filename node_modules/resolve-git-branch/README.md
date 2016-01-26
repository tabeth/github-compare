# resolve-git-branch [![build status](https://secure.travis-ci.org/thlorenz/resolve-git-branch.png)](http://travis-ci.org/thlorenz/resolve-git-branch)

Resolves the currently checked out branch of the git repository in the current directory.

```js
var branch = require('resolve-git-branch');

branch(function (err, branch) {
  if (err) return console.error(err);
  console.log(branch); // => master
})
```

## Installation

    npm install resolve-git-branch

## API

### resolveGitBranch(cb)

```
/**
 * Runs git command to resolve currently checked out branch and calls back with branch name.
 * 
 * @name resolveGitBranch
 * @function
 * @param {Function} cb function (err, branch) {}
 */
```

## License

MIT
