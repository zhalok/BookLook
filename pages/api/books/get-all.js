const mysqlClient = require('../../../utils/database_connection');

export default function handler(req, res) {
	mysqlClient.query('select * from books', (err, result, fields) => {
		res.json(result);
	});
}
