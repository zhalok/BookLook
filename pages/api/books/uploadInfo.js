const mysqlClient = require('../../../utils/database_connection');

export default function handler(req, res) {
	const { name, catagory, topic, author, publisher, uploaderId, edition } =
		req.body;

	mysqlClient.query(
		`insert into books values ( '${name}','${catagory}','${topic}','${author}','${publisher}','${uploaderId}','${edition}' )`,
		(err, result, fields) => {
			if (err) {
				res.json(err);
				return;
			}
			mysqlClient.query(
				` select id from books where name = '${name}' topic='${topic}', author='${author}',publisher='${publisher}',edition='${edition}',uploader='${uploader}'  `,
				(err, result, fields) => {
					if (err) {
						res.json(err);
						return;
					}
					res.json(result);
					// return;
				}
			);
		}
	);
}
