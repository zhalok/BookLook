const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  try {
    const { bookId, userId } = req.query;
    // await new Promise((resolve, reject) => {
    //   const queryString =
    //     "update books set recommendations = recommendations +1 where id = ? ";
    //   mysqlClient.query(queryString, [bookId], (err, row) => {
    //     if (err) reject(err);
    //     else resolve(row);
    //   });
    // });
    await new Promise((resolve, reject) => {
      mysqlClient.query(
        "insert into user_recommendation (userId,bookId) values (?)",
        [[userId, bookId]],
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
