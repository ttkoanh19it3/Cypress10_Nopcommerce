// var fs = require('fs');
// var csv = require('fast-csv');
// var ws = fs.createWriteStream('mylist.csv');
const ObjectsToCsv = require('objects-to-csv')
// csv.write([
//     ["a1", "b1"],
//     ["a1", "b1"],
//     ["a1", "b1"],
// ], {headers:true}).pipe(ws);

const itemsArray = [
    { itemId: 3, itemRef: "Item 001", itemTest: "3"},
];

const test = [];
t

(async () => {
    const csv = new ObjectsToCsv(itemsArray);
    await csv.toDisk('./test.csv' , { append: true });
})();
