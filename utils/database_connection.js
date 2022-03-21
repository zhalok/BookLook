const mysql = require('mysql');
const mysqlClient = mysql.createConnection({
	host: 'localhost',
	user: 'zhalok',
	database: 'BookLook',
	password: '03041959',
});

mysqlClient.connect();

module.exports = mysqlClient;
