const mysqlClient = require("../../../utils/database_connection");
const { useRouter } = require("next/router");
export default async function handler(req, res) {
  try {
    const { bookId } = req.query;

    const queryString = "select * from books where id = ?";
    const data = await new Promise((resolve, reject) => {
      mysqlClient.query(queryString, [bookId], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });

    res.json(data);
  } catch (e) {
    res.json(e);
  }
}
