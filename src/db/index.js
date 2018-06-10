const mysql = require('mysql');

const DATABASE_URL = process.env.DATABASE_URL || 'mysql://root@localhost/expedia?multipleStatements=true';

const pool = mysql.createPool(DATABASE_URL);

const query = (sql, values) => new Promise((resolve, reject) => {
  pool.getConnection((connectionError, connection) => {
    if (connectionError) {
      reject(connectionError);
    } else {
      connection.query(sql, values, (queryError, rows) => {
        if (queryError) {
          reject(queryError);
        } else {
          resolve(rows);
        }
        connection.release();
      });
    }
  });
});

module.exports = {
  query,
  escapeId: mysql.escapeId,
};
