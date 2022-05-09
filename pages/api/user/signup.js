const mysqlClient = require("../../../utils/database_connection");
const protection = require("../../../utils/protection");
const token_generator = require("../../../utils/token_generator");

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ message: "Wrong method" });
    return;
  }
  const { name, email, password } = req.body;

  await new Promise((resolve, reject) => {
    mysqlClient.query(
      "insert into users (name,email,hashed_password,verified) values (?)",
      [[name, email, protection.hash(password), false]],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });

  const data = await new Promise((resolve, reject) => {
    mysqlClient.query(
      "select id from users order by id desc limit 1",
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });

  const userId = data[0].id;

  const { token, expiration_time } = token_generator.generate(8);

  await new Promise((resolve, reject) => {
    mysqlClient.query(
      "insert into tokens (userId,token,expiration_time) values (?)",
      [[userId, token, expiration_time]],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });

  res.json(data);
}
