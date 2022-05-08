const mysqlClient = require("../../../utils/database_connection");
const protection = require("../../../utils/protection");
export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ message: "Wrong method" });
    return;
  }
  const { name, email, password } = req.body;
  const hashed_password = protection.hash(password);
  const queryString =
    "insert into users (name,email,hashed_password,verified) values(?)";
  const promise1 = new Promise((resolve, reject) => {
    mysqlClient.query(
      queryString,
      [[name, email, hashed_password, false]],
      (err, rows) => {
        if (err) reject(err);
        else {
          mysqlClient.query(
            "select id from users order by id desc limit 1",
            (err1, rows1) => {
              if (err1) reject(err1);
              else resolve(rows1);
            }
          );
        }
      }
    );
  });
  const response1 = await promise1;
  res.json(response1);
}
