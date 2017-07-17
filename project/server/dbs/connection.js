const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "123456",
    port: "3306",
    database: "hello"
});

module.exports = connection;
