const database = require('nedb');

const questionDB = new database({
    filename: './databaseFile/questionDB.db',
    autoload: true
});

module.exports = { questionDB };