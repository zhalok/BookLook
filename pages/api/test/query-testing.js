var mysql = require('mysql');
const fs = require('fs');
export default async function handler(req, res) {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'zhalok',
		password: '03041959',
		database: 'BookLook',
	});

	connection.connect();

	let promise = new Promise(function (resolve, reject) {
		connection.query('select * from books', (err, result, fields) => {
			if (err) {
				reject(err);
			} else {
				console.log(result[0]);
				resolve(result);
			}
		});
	});
	const result = await promise;
	const jsonResult = JSON.stringify(result[0]);
	console.log(jsonResult);
	console.log(JSON.parse(jsonResult));
	res.json(result);
}
