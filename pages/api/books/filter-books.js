const mysqlClient = require("../../../utils/database_connection");

export default async function handler(req, res) {
  const { authors, publications, catagories, courses } = req.body;
  console.log(catagories);
  const queryString1 =
    "select id from books where author in (?) and publication in (?) and id in (select bookId from books_catagories where catagory in (?) and bookId in (select bookId from book_courses where course in (?)) )  ";
  const promise1 = new Promise((resolve, reject) => {
    mysqlClient.query(
      queryString1,
      [authors, publications, catagories, courses],
      (err, rows, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
  const response1 = await promise1;
  res.json(response1);
}
