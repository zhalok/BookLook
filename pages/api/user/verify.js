const mysqlClient = require("../../../utils/database_connection");
export default function handler(req, res) {
  const { otp } = req.query;
  res.json(`hi user your otp is ${otp}`);
}
