const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ message: "wrong method" });
    return;
  }
  const { name } = req.body;
  console.log(name);
  const promise = new Promise((resolve, reject) => {
    mysqlClient.query(
      `insert into publications (name) values ('${name}')`,
      (err, rows, fields) => {
        if (err) {
          reject(err);
        } else {
          mysqlClient.query(
            "select id from publications order by id desc limit 1",
            (err, rows1, fields) => {
              if (err) {
                reject(err);
              } else {
                resolve(rows1);
              }
            }
          );
        }
      }
    );
  });

  const data = await promise;
  res.json(data);
}
