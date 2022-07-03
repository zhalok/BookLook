const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  if (req.method != "PUT") {
    res.status(400);
    res.json({ message: "Invalid method" });
    return;
  }

  const { comment, commentId } = req.body;

  try {
    await new Promise((resolve, reject) => {
      mysqlClient.query(
        `update  comments set comment= ? where id =? `,
        [comment, commentId],
        (err, data) => {
          if (err) reject(err);
          else resolve(data);
        }
      );
    });

    const data = await new Promise((resolve, reject) => {
      mysqlClient.query(
        "select * from comments where id=?",
        [commentId],
        (err, data) => {
          if (err) reject(err);
          else resolve(data);
        }
      );
    });
    res.json(data);
  } catch (e) {
    res.json(e);
  }
}
