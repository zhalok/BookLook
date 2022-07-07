const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ message: "wrong method" });
    return;
  }
  try {
    const { name } = req.body;
    const promise = new Promise((resolve, reject) => {
      mysqlClient.query(
        `insert into courses (name) values ('${name}')`,
        (err, rows, fields) => {
          if (err) {
            // res.json(err);
            reject(err);
          } else {
            mysqlClient.query(
              "select id from courses order by id desc limit 1",
              (err1, rows1, fields) => {
                if (err1) {
                  // res.json(err);
                  reject(err1);
                } else {
                  // res.json(rows1);
                  resolve(rows1);
                }
              }
            );
          }
        }
      );
    });

    const response = await promise;
    // mysqlClient.end();
    res.json(response);
  } catch (e) {}
}
