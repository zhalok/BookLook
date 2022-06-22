const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  try {
    const promise = new Promise((resolve, reject) => {
      // mysqlClient.connect();
      mysqlClient.query("select * from books", (err, rows, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });

    const response = await promise;
    const data = [];
    // for (let i = 0; i < response.length; i++) data.push(response[i].author);
    res.json(response);
    // mysqlClient.end();
  } catch (e) {
    res.json(e);
  }
}
