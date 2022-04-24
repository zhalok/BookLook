const mysqlClient = require('../../../utils/database_connection');

export default function handler(req, res) {
	mysqlClient.query('select * from departments', (err, rows, fields) => {
		res.json(rows);
	});
}
