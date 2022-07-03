const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  if (req.method != "DELETE") {
    res.status(400);
    res.json({ message: "Invalid method" });
    return;
  }

  const { id } = req.query;

  try {
    await new Promise((resolve, reject) => {
      mysqlClient.query(
        "delete from comments where id = ?",
        [id],
        (err, data) => {
          if (err) reject(err);
          else resolve(data);
        }
      );
    });

    res.json({ message: "Comment deleted" });
  } catch (e) {
    res.json(e);
  }
}
