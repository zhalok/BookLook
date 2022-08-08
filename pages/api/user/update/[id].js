const mysqlClient = require("../../../../utils/database_connection");
export default async function Handler(req, res) {
  if (req.method != "POST") {
    res.status(400).json({ message: "Bad request" });
    return;
  }
  const { id } = req.query;
  const { name, email } = req.body;
  console.log(name, email);
  try {
    const data = await new Promise((resolve, reject) => {
      const queryString = "update users set name=? , email=? where id=?";
      mysqlClient.query(queryString, [name, email, id], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    res.status(200).json({ message: "User updated" });
  } catch (e) {
    res.json(e);
  }
}
