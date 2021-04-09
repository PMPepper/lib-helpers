// post-install.js

/**
 * Script to run after npm install
 *
 * Copy files from dist into package root
 */

'use strict'

var path = require('path');
var fs = require('fs');

const directory = './dist';
const target = './';

fs.readdirSync(directory).forEach(file => {
  const absolute = path.join(directory, file);

  if (fs.statSync(absolute).isDirectory()) {
    //move the directory
    fs.renameSync(absolute, path.join(target, file));
  }
});

//once finished, remove this script
fs.rmSync('./post-install.js');
