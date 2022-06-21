const mysqlClient = require("../../../utils/database_connection");
export default async function (req, res) {
  try {
    // mysqlClient.connect();
    const promise = new Promise((resolve, reject) => {
      mysqlClient.query("select * from courses", (err, rows, fields) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
    const data = await promise;
    let _data = [];
    for (let i = 0; i < data.length; i++) {
      _data.push(data[i].name);
    }
    // mysqlClient.end();
    res.json(_data);
  } catch (e) {}
  // res.json({ message: "hello" });
}
