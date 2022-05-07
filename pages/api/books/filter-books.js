const mysqlClient = require("../../../utils/database_connection");

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.json("Wrong method");
    return;
  }
  const { authors, publications, catagories, courses } = req.body;
  console.log(authors, publications, catagories, courses);

  // console.log(catagories, courses);
  const queryString1 =
    "select id from books where author in (?) and publication in (?) and id in (select bookId from books_catagories where catagory in (?) and bookId in (select bookId from book_courses where course in (?)) )  ";
  const queryString2 = `select * from books where id in (${queryString1})`;

  const promise1 = new Promise((resolve, reject) => {
    mysqlClient.query(
      queryString2,
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

  const bookData = await promise1;
  res.json(bookData);
}
