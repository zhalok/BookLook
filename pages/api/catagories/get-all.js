const mysqlClient = require('../../../utils/database_connection');

export default async function handler(req, res) {
	const promise = new Promise((resolve, reject) => {
		mysqlClient.query('select * from catagories', (err, rows, fields) => {
			if (err) {
				console.log(err);
				reject(err);
			} else {
				resolve(rows);
			}
		});
	});
	const data = await promise;

	res.json(data);
}
