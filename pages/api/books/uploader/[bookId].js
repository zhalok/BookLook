const mysqlClient = require("../../../../utils/database_connection");
export default function handler(req, res) {
  const { bookId } = req.query;
  const queryString = "select name from books join ";
}
