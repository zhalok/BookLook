const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  const { uploader } = req.query;
  try {
    const promise = new Promise((resolve, reject) => {
      mysqlClient.query(
        "select * from books where uploader=?",
        [uploader],
        (err, rows, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });

    const response = await promise;

    res.json(response);
  } catch (e) {
    res.json(e);
  }
}
