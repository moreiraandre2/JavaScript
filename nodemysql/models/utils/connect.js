const mysql = require('mysql');
const Conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'node',
});

module.exports = Conn;

