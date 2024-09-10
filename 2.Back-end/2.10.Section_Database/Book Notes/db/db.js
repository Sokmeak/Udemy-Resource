const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Book_note",
  password: "sokmeak1376@",
  port: 5432,
});

module.exports = pool;
