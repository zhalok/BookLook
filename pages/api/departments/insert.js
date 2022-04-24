const mysqlClient = require('../../../utils/database_connection');
export default function handler(req, res) {
	if (req.method != 'POST') {
		res.status(405).json({ message: 'wrong method' });
		return;
	}
	const { name } = req.query;
	mysqlClient.query(
		`insert into departments (name) values ('${name}')`,
		(err, rows, fields) => {
			if (err) {
				res.json(err);
			} else {
				mysqlClient.query(
					'select id from departments order by id desc limit 1',
					(err, rows1, fields) => {
						if (err) {
							res.json(err);
						} else {
							res.json(rows1);
						}
					}
				);
			}
		}
	);
}
