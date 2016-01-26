#!/usr/bin/env node
console.log('GitHub Compare acts similarly to `git diff`, but uses GitHub Compare')

var program = require('commander');
var open    = require('open');
var config  = fs.readFileSync('.git/config');
var parse   = require('github-repo-from-config');

program
.arguments('<blobOne> <blobTwo>')
//.option('-one <blobOne>', 'The working tree, commit id or index')
//.option('-two  <blobTwo>', 'The working tree, commit id or index')
.option('-o, --organization  <organization>', 'The organization of your company')
.option('-r, --repo <repo>', 'The repo you with the branches you want to compare.')
.action(function() {
  // Open GitHub
  var organization = program.organization + '/' || '';
  var repo         = program.repo || parse(config).path;
  var one          = program.args[0];
  var two          = program.args[1];

  var link = 'https://github.com/' + organization + repo + '/compare/' + one + '...' + two + '#files_bucket';
  open(link)
})

.parse(process.argv)

