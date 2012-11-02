#!/usr/bin/env node

var PORT = process.argv[2] && parseInt(process.argv[2], 10) || 3000;
var STATIC_DIR = __dirname + '/client';
var DATA_FILE = __dirname + '/restaurants.json';

require('./server').start(PORT, STATIC_DIR, DATA_FILE);
