const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  if (req.method != "GET") {
    res.status(400);
    res.json({ message: "Invalid method" });
    return;
  }

  try {
    const data = await new Promise((resolve, reject) => {
      mysqlClient.query("select * from comments", (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });

    res.json(data);
  } catch (e) {
    res.json(e);
  }
}
