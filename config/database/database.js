const database = require('nedb');

const questionDB = new database({
    filename: './config/database/databaseFile/questionDB.db',
    autoload: true
});

module.exports = { questionDB };