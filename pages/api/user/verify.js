const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  const { otp } = req.query;

  try {
    // mysqlClient.connect();
    let data = await new Promise((resolve, reject) => {
      mysqlClient.query(`select * from otps where otp=${otp}`, (err, rows) => {
        if (err) {
          reject(err);
        } else resolve(rows);
      });
    });
    if (data.length == 0) {
      res.json({ message: "Invalid OTP" });
      return;
    }

    const { expiration_time, userId } = data[0];
    const cur_time = new Date().getTime() / 1000;

    console.log(cur_time, expiration_time);

    if (expiration_time < cur_time) {
      res.json({ message: "OTP expired" });
      return;
    }

    await new Promise((resolve, reject) => {
      mysqlClient.connect();
      mysqlClient.query(
        `update users set verified=true where id=${userId}`,
        (err) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });
    // mysqlClient.end();
    res.redirect("/login");
  } catch (e) {
    mysqlClient.end();
    res.json(e);
  }
}
