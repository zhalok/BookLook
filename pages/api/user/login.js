const protection = require("../../../utils/protection");
const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ message: "Wrong method" });
    return;
  }
  const { email, password } = req.body;
  console.log(email);
  const users = await new Promise((resolve, reject) => {
    mysqlClient.query(
      "select * from users where email = ? ",
      [email],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });
  // console.log(users);
  if (users.length == 0) res.json({ message: "invalid email or password" });
  else {
    const user = users[0];
    console.log(user);
    const hashed_password = user.hashed_password;

    const valid = protection.compare(password, hashed_password);
    if (valid) {
      const payload = { userId: user.id, role: "General User" };
      //   const token = "hello";
      const token = await protection.token_generator(payload);
      console.log(token);
      res.json({ token });
    } else {
      res.json({ message: "Unauthenticated" });
    }
  }
}
