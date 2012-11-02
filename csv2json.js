#!/usr/bin/env node

var csv = require('csv');
var fs = require('fs');
var RestaurantRecord = require('./server/model').Restaurant;

var inputFile = process.argv[2] || 'restaurants.csv';
var outputFile = process.argv[3] || 'restaurants.json';
var buffer = [];


var bufferRow = function(data, idx) {
  if (idx === 0) {
    return;
  }

  buffer.push(RestaurantRecord.fromArray(data));
};

var writeOutput = function() {
  fs.writeFile(outputFile, JSON.stringify(buffer), function() {
    console.log('Converted to ' + outputFile);
  });
};

csv()
  .from.stream(fs.createReadStream(inputFile))
  .on('record', bufferRow)
  .on('end', writeOutput);
