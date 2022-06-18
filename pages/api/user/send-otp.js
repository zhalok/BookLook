const mysqlClient = require("../../../utils/database_connection");
const otp_generator = require("../../../utils/otp_generator");
const send_email = require("../../../utils/send_email");
export default async function handler(req, res) {
  const { userId } = req.query;
  const { otp, expiration_time } = otp_generator.generate(8);

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
      "insert into otps (userId,otp,expiration_time) values (?)",
      [[userId, otp, expiration_time]],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });
  const message = `<a href="http://localhost:3000/api/user/verify?otp=${otp}">Verify email<a>`;
  try {
    await send_email(email, message);
    res.json("verification email sent");
  } catch (e) {
    res.status(500).json(e);
  }
}
