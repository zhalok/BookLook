const mysqlClient = require("../../../utils/database_connection");
const protection = require("../../../utils/protection");
const otp_generator = require("../../../utils/otp_generator");
const send_email = require("../../../utils/send_email");

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ message: "Wrong method" });
    return;
  }
  const { name, email, password } = req.body;
  try {
    // mysqlClient.connect();
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

    const { otp, expiration_time } = otp_generator.generate(8);

    await new Promise((resolve, reject) => {
      mysqlClient.query(
        "insert into otps (userId,otp,expiration_time) values (?)",
        [[userId, otp, expiration_time]],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });

    const message = `<a href="http://localhost:3000/api/user/verify?otp=${otp}">Verify email<a>`;
    await send_email(email, message);
    res.json(data);
    // mysqlClient.end();
  } catch (e) {
    res.json(e);
  }
}
