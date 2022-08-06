const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  try {
    if (req.method != "DELETE") {
      res.status(400).json({ message: "Bad request" });
      return;
    }

    const { bookId, userId } = req.query;

    await new Promise((resolve, reject) => {
      mysqlClient.query(
        "delete from user_recommendation where bookId=? & userId=?",
        [bookId, userId],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
    res.status(200).json({ message: "Recommendation Updated" });
  } catch (e) {
    res.json(e);
  }
}
