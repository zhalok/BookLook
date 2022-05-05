const mysqlClient = require("../../../utils/database_connection");
export default async function (req, res) {
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
  res.json(_data);
  // res.json({ message: "hello" });
}
