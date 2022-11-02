const pg = require('pg');

// DATABASE_HOST=

let pool = new pg.Pool({
  database: "cloud-todo"
});

module.exports = pool;