const mysqlClient = require("../../../utils/database_connection");
const insertStringGenerator = require("../../../utils/queryStringGenerators/books/insertStringGenerator");

export default function handler(req, res) {
  const queryString =
    "insert into books (name,publication,author,edition,availibility,course,reviews,uploader,upload_time) values ?";
  const {
    name,
    publication,
    author,
    edition,
    availibility,
    course,
    reviews,
    uploader,
    upload_time,
  } = req.body;

  mysqlClient.query(
    queryString,
    [
      [
        [
          name,
          publication,
          author,
          edition,
          availibility,
          course,
          reviews,
          uploader,
          upload_time,
        ],
      ],
    ],
    (err) => {
      if (err) {
        res.json(err);
        return;
      }
      mysqlClient.query(
        "select id from books order by id desc limit 1",
        (err, results, fields) => {
          if (err) {
            res.json(err);
            return;
          }
          res.json(results);
        }
      );
    }
  );
}
