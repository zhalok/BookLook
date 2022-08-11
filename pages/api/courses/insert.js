const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ message: "wrong method" });
    return;
  }
  try {
    const { names } = req.body;
    console.log(names);
    const _names = [];
    for (let i = 0; i < names.length; i++) {
      _names.push([names[i]]);
    }

    const promise = new Promise((resolve, reject) => {
      mysqlClient.query(
        `insert into courses (name) values ?`,
        [_names],
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
