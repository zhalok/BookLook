const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  const { otp } = req.query;

  try {
    const expiration_time = new Promise((resolve, reject) => {
      mysqlClient.connect();
      mysqlClient.query(
        `select expiration_time from otps where otp = ${otp}`,
        (err, rows) => {
          if (err) reject(err);
          else {
            if (rows.length == 0) reject("Invalid otp");
            else {
              resolve(rows[0].expiration_time);
            }
          }
        }
      );
      mysqlClient.end();
    });
    if (expiration_time < new Date().getTime() / 1000) {
      res.status(401).json({
        message: "OTP expired",
      });
      return;
    }
    const userId = await new Promise((resolve, reject) => {
      mysqlClient.connect();
      mysqlClient.query(
        `select userId from otps where otp=${otp}`,
        (err, rows) => {
          if (err) reject(err);
          else {
            if (rows.length == 0) reject("User not found");
            else resolve(rows[0].userId);
          }
        }
      );
      mysqlClient.end();
    });

    await new Promise((resolve, reject) => {
      mysqlClient.connect();
      mysqlClient.query(
        `update users set verified=true where id=${userId}`,
        (err, rows) => {
          if (err) reject(err);
          else {
            resolve(rows);
          }
        }
      );
      mysqlClient.end();
    });

    res.redirect("/login");
  } catch (e) {
    res.status(401).json({
      message: "Unable to verify",
    });
  }
}
