const mysql = require('mysql');
const url = require('url');

const DATABASE_URL = process.env.DATABASE_URL || 'mysql://root@localhost';

const parsed = url.parse(DATABASE_URL);

console.log(parsed);
