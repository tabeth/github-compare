#!/usr/bin/env node
console.log('GitHub Compare acts similarly to `git diff`, but uses GitHub Compare')

var program = require('commander');
var open    = require('open');

program
.arguments('<blobOne> <blobTwo>')
//.option('-one <blobOne>', 'The working tree, commit id or index')
//.option('-two  <blobTwo>', 'The working tree, commit id or index')
.option('-o, --organization  <organization>', 'The organization of your company')
.option('-r, --repo <repo>', 'The repo you with the branches you want to compare.')
.action(function() {
  // Open GitHub
  var organization = program.organization;
  var repo         = program.repo;
  var one          = program.args[0];
  var two          = program.args[1];

  var link = 'https://github.com/' + organization + '/' + repo + '/compare/' + one + '...' + two + '#files_bucket';
  open(link)
})

.parse(process.argv)

