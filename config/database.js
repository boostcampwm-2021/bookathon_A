const database = require('nedb');

const questionDB = new database({
    filename: './database/databaseFile/questionDB.db',
    autoload: true
});

// const insert = function(DB, data) {
//     DB.insert(data, function(err, newDoc) {});
// }

// const select = function(DB) {
//     return new Promise(resolve => {
//         DB.find({}, (err, docs) => resolve(docs));
//     });
// }

// const paymentDelete = function(payment) {
//     paymentDB.remove({ payment: payment }, {}, function(err, numRemoved){});
// }

// const update = (DB, originData, updateData) => {
//     return new Promise(resolve => {
//         DB.update(originData, updateData, (err, docs) => resolve());
//     });
// }

// module.exports = { contentDB, paymentDB, insert, select, paymentDelete, update };