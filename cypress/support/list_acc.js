
var fs = require('fs');
var csv = require('fast-csv');
var ws = fs.createWriteStream('mylist.csv');

csv.write([
    ["a1", "b1"],
    ["a1", "b1"],
    ["a1", "b1"],
], {headers:true}).pipe(ws);