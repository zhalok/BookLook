const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  try {
    const promise = new Promise((resolve, reject) => {
      mysqlClient.query("select * from publications", (err, rows, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });

    const response = await promise;
    const data = [];
    for (let i = 0; i < response.length; i++) data.push(response[i].name);
    res.json(data);
  } catch (e) {
    res.json(e);
  }
}
