const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ message: "wrong method" });
    return;
  }
  const { names } = req.body;

  const _names = [];
  for (let i = 0; i < names.length; i++) {
    _names.push([names[i]]);
  }

  try {
    const promise = new Promise((resolve, reject) => {
      mysqlClient.query(
        `insert into catagories (name) values ?`,
        [_names],
        (err, rows, fields) => {
          if (err) {
            reject(err);
          } else {
            mysqlClient.query(
              "select id from catagories order by id desc limit 1",
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
    // mysqlClient.end();
    res.json(data);
  } catch (e) {
    res.json(e);
  }
}
