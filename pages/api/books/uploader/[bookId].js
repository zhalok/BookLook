const mysqlClient = require("../../../../utils/database_connection");
export default async function handler(req, res) {
  const { bookId } = req.query;
  const queryString =
    "select users.name from books inner join users on books.uploader=users.id where books.id = ?";

  try {
    const data = await new Promise((resolve, reject) => {
      mysqlClient.query(queryString, [bookId], (err, row) => {
        if (err) {
          reject(err);
        } else resolve(row);
      });
    });

    res.json(data);
  } catch (e) {
    res.json(e);
  }
}
