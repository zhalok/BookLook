const mysqlClient = require("../../../utils/database_connection");
const insertStringGenerator = require("../../../utils/queryStringGenerators/books/insertStringGenerator");

export default function handler(req, res) {
  console.log(req.body);
  const queryString = insertStringGenerator(req.body);

  mysqlClient.query(queryString, (err) => {
    if (err) {
      res.json(err);
      return;
    }
    mysqlClient.query(
      "select id from books order by id desc limit 1",
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
