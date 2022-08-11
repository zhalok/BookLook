const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  try {
    // mysqlClient.connect();
    const promise = new Promise((resolve, reject) => {
      mysqlClient.query(
        "select publication from books",
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
    const data = [];
    for (let i = 0; i < response.length; i++) data.push(response[i].name);
    // mysqlClient.end();
    res.json(data);
  } catch (e) {
    // mysqlClient.end();
    res.json(e);
  }
}
