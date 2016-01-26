'use strict';

var test = require('tap').test
var exec = require('child_process').exec;

var resolve = require('../')

function checkout(branch, cb) {
  exec('git checkout ' + branch, function (err, stdout, stderr) {
    if (err) return cb(err.stack);
    cb();
  })
}

function branchCheckout(branch, cb) {
  exec('git checkout -b ' + branch, function (err, stdout, stderr) {
    if (err) return cb(err.stack);
    cb();
  })
}

function deleteBranch(branch, cb) {
  exec('git branch -D ' + branch, function (err, stdout, stderr) {
    if (err) return cb(err.stack);
    cb();
  })
}

test('master', function (t) {
  // travis checks out HEAD initially
  checkout('master',  function (err) {
    // ignore err (due to us being already on master in cases)
    resolve(function (err, branch) {
      t.notOk(err, 'no error')
      t.equal(branch, 'master', 'resolves correct branch')
      t.end()
    })
  })
})

test('test-branch', function (t) {
  function end(err) {

    checkout('master',  function (err_) {
      if (err_) { t.fail(err_); t.end(); }

      deleteBranch('test-branch', function (err_) {
        if (err_) { t.fail(err_); t.end(); }
        if (err)  t.fail(err);
        t.end();
      });
    });
  }
  var branch = 'test-branch';

  deleteBranch(branch, function(err) {
    // ignore err which is raised if branch didn't exist
    
    branchCheckout(branch, function (err) {
      if (err) return end(err);

      resolve(function (err, branch_) {
        t.notOk(err, 'no error')
        t.equal(branch_, branch, 'resolves correct branch')
        end()
      })
    });
  });
})
