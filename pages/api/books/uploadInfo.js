const mysqlClient = require('../../../utils/database_connection');
const insertStringGenerator = require('../../../utils/queryStringGenerators/books/insertStringGenerator');

export default function handler(req, res) {
	const {
		name,
		author,
		publication,
		reviews,
		availiblity,
		uploader,
		uploadTime,
	} = req.body;

	const queryString = insertStringGenerator(
		name,
		author,
		publication,
		reviews,
		availiblity,
		uploader,
		uploadTime
	);
	mysqlClient.query(queryString, (err) => {
		if (err) {
			res.json(err);
			return;
		}
		mysqlClient.query(
			'select id from table_name order by id desc limit 1',
			(err, results, fields) => {
				if (err) {
					res.json(err);
					return;
				}
				res.json(results);
			}
		);
	});
}
