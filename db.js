const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
db = lowdb(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [], sessions: [], count: 0}).write();

module.exports = db;