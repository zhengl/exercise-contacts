const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'Expedia',
});

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
