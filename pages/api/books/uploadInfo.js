const mysqlClient = require("../../../utils/database_connection");

export default async function handler(req, res) {
  const queryString =
    "insert into books (name,publication,author,edition,availibility,course,recommendations,uploader,upload_time) values ?";
  const {
    name,
    publication,
    author,
    edition,
    availibility,
    course,

    catagories,
    uploader,
    upload_time,
  } = req.body;

  console.log(req.body);

  const values = [
    [
      [
        name,
        publication,
        author,
        edition,
        availibility,
        course,
        0,
        uploader,
        upload_time,
      ],
    ],
  ];

  try {
    //     mysqlClient.connect();

    const promise1 = new Promise((resolve, reject) => {
      mysqlClient.query(queryString, values, (err, rows, fields) => {
        if (err) {
          reject(err);
        } else {
          mysqlClient.query(
            "select id from books order by id desc limit 1",
            (err1, rows1, fields) => {
              if (err1) {
                reject(err1);
              } else {
                resolve(rows1);
              }
            }
          );
        }
      });
    });

    const response1 = await promise1;

    const bookId = response1[0].id;

    console.log(bookId);

    const book_catagory_rows = [];
    console.log(catagories);
    for (let i = 0; i < catagories.length; i++) {
      book_catagory_rows.push([bookId, catagories[i]]);
    }

    const promise2 = new Promise((resolve, reject) => {
      mysqlClient.query(
        "insert into books_catagories(bookId,catagory) values ?",
        [book_catagory_rows],
        (err, rows, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });

    const promise3 = new Promise((resolve, reject) => {
      mysqlClient.query(
        "insert into book_courses(bookId,course) values ?",
        [[[bookId, course]]],
        (err, rows, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });

    //     mysqlClient.end();

    res.json(response1);
    // mysqlClient.end();
  } catch (e) {
    // mysqlClient.end();
    // res.json("hello");
    console.log(e);
    res.json(e);
  }
}
