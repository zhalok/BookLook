const mysql = require("mysql");
const mysqlClient = mysql.createConnection({
  host: "bqlz2crijfharfe0jjuo-mysql.services.clever-cloud.com",
  user: process.env.DB_USER,
  database: "bqlz2crijfharfe0jjuo",
  password: process.env.DB_PASS,
});
// mysql -h bqlz2crijfharfe0jjuo-mysql.services.clever-cloud.com -P 3306 -u unf1qnyqmdbosd8m -p bqlz2crijfharfe0jjuo
// connection string
// mysqlClient.connect();

module.exports = mysqlClient;
