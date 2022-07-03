const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(400);
    res.json({ message: "Invalid method" });
    return;
  }

  const { comment, commenter, bookId } = req.body;

  try {
    await new Promise((resolve, reject) => {
      mysqlClient.query(
        "insert into comments (comment,commenter,bookId) values (?) ",
        [[comment, commenter, bookId]],
        (err, data) => {
          if (err) reject(err);
          else resolve(data);
        }
      );
    });

    const data = await new Promise((resolve, reject) => {
      mysqlClient.query(
        "select * from comments order by id desc limit 1",
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
