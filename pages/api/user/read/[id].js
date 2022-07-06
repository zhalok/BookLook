const mysqlClient = require("../../../../utils/database_connection");
export default async function handler(req, res) {
  const { id } = req.query;
  console.log(id);
  const queryString = "select * from users where id=?";
  try {
    const data = await new Promise((resolve, reject) => {
      mysqlClient.query(queryString, [id], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    res.json(data);
  } catch (e) {
    res.json(e);
  }
}
