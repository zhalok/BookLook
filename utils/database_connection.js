const mysql = require("mysql");
const mysqlClient = mysql.createConnection({
  host: "bqlz2crijfharfe0jjuo-mysql.services.clever-cloud.com",
  // host: "localhost",
  user: process.env.DB_USER,
  // user: "zhalok",
  database: "bqlz2crijfharfe0jjuo",
  // database: "BookLook",
  password: process.env.DB_PASS,
  // password: "03041959",
});
// mysql -h bqlz2crijfharfe0jjuo-mysql.services.clever-cloud.com -P 3306 -u unf1qnyqmdbosd8m -p bqlz2crijfharfe0jjuo
// connection string
// mysqlClient.connect();

module.exports = mysqlClient;
