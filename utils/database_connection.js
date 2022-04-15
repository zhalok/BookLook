const mysql = require('mysql');
const mysqlClient = mysql.createConnection({
	host: 'bqlz2crijfharfe0jjuo-mysql.services.clever-cloud.com',
	user: 'unf1qnyqmdbosd8m',
	database: 'bqlz2crijfharfe0jjuo',
	password: '0naVxaKEKYXFTcOPW0dK',
});

mysqlClient.connect();

module.exports = mysqlClient;
