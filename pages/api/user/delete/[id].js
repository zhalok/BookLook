const mysqlClient = require("../../../../utils/database_connection");
export default async function handler(req, res) {
  if (req.method != "DELETE") {
    res.status(400).json({ message: "Bad request" });
    return;
  }
  const { id } = req.query;
  try {
    await new Promise((resolve, reject) => {
      const queryString = "delete from users where id=?";
      mysqlClient.query(queryString, [id], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    res.json({ message: "User deleted" });
  } catch (e) {
    res.json(e);
  }
}
