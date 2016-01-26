'use strict';

var exec = require('child_process').exec;


var branch = module.exports = 

/**
 * Runs git command to resolve currently checked out branch and calls back with branch name.
 * 
 * @name resolveGitBranch
 * @function
 * @param {Function} cb function (err, branch) {}
 */
function resolveGitBranch(cb) {
  // http://stackoverflow.com/a/12142066/97443
  exec('git rev-parse --abbrev-ref HEAD', function (err, stdout, stderr) {
    if (err) return cb(err.stack);
    if (stderr) return cb(stderr);
    
    cb(null, stdout.trim());
  });
};
