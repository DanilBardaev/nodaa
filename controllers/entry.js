const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test.sqlite");
const sql =
  "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, age INT NOT NULL)";
db.run(sql);
class Entry {
  constructor() {}
  static create(postForm, cb) {}
}