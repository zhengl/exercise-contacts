const mysql = require('mysql');
const path = require('path');
const fs = require('fs');

const DATABASE_URL = process.env.DATABASE_URL || 'mysql://root@localhost/expedia?multipleStatements=true';

console.log(`Start to initialize database: ${DATABASE_URL}`); // eslint-disable-line no-console

const connection = mysql.createConnection(DATABASE_URL);

connection.connect();

const sql = fs.readFileSync(path.resolve(__dirname, './init.sql'), 'utf8');

connection.query(sql, (error) => {
  if (error) {
    console.error(error); // eslint-disable-line no-console
  } else {
    console.log('Database initialized.'); // eslint-disable-line no-console
  }

  connection.destroy();
});
