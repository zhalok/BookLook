const mysqlClient = require("../../../utils/database_connection");
const otp_generator = require("../../../utils/otp_generator");
const send_email = require("../../../utils/send_email");
export default async function handler(req, res) {
  const { userId } = req.query;
  const { otp, expiration_time } = otp_generator.generate(8);
  try {
    // mysqlClient.connect();
    let email = await new Promise((resolve, reject) => {
      mysqlClient.query(
        `select email from users where id = ${userId}`,
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
    email = JSON.parse(JSON.stringify(email))[0].email;

    await new Promise((resolve, reject) => {
      mysqlClient.query(
        "insert into tokens (userId,token,expiration_time) values (?)",
        [[userId, otp, expiration_time]],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
    const message = `<a href="http://localhost:3000/api/user/verify?otp=${otp}">Verify email<a>`;
    const subject = "Email verification";
    try {
      await send_email(email, subject, message);
      res.json("verification email sent");
    } catch (e) {
      res.status(500).json(e);
    }
    // mysqlClient.end();
  } catch (e) {}
}
