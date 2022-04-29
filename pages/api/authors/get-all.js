const mysqlClient = require("../../../utils/database_connection");
export default function handler(req, res) {
  mysqlClient.query("select author from books", (err, rows, fields) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
}
