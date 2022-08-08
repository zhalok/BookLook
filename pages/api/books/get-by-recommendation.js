const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  const { userId } = req.query;
  try {
    const promise = new Promise((resolve, reject) => {
      const queryString = `select * from books inner join user_recommendation on books.id = user_recommendation.bookId where userId=?`;
      mysqlClient.query(queryString, [userId], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });

    const response = await promise;

    res.json(response);
  } catch (e) {
    res.json(e);
  }
}
