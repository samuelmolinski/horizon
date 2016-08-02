'use strict';

const package_json = require('../package.json');

const run = (args) => {
  if (args.length) {
    throw new Error('create-cert takes no arguments');
  }
  console.info(package_json.version);
};

module.exports = {
  run,
  description: 'Print the version number of horizon',
};
