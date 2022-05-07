const mysqlClient = require("../../../utils/database_connection");

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.json("Wrong method");
    return;
  }
  const { authors, publications, catagories, courses } = req.body;
  const queryString1 = "select id from books where author in (?)";
  const queryString2 = "select id from books where publication in (?)";
  const queryString3 =
    "select distinct bookId from books_catagories where catagory in (?)";
  const queryString4 =
    "select distinct bookId from book_courses where course in (?)";
  const queryString5 = "select * from books where id in (?)";

  let filter_counter = 0;

  const responses = [];
  if (authors) {
    filter_counter++;
    const promise = new Promise((resolve, reject) => {
      mysqlClient.query(queryString1, [authors], (err, rows, fields) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    const response = await promise;
    for (let i = 0; i < response.length; i++) {
      let temp = JSON.stringify(response[i]);
      temp = JSON.parse(temp);
      responses.push(temp.id);
    }
  }

  if (publications) {
    filter_counter++;
    const promise = new Promise((resolve, reject) => {
      mysqlClient.query(queryString2, [publications], (err, rows, fields) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    const response = await promise;
    for (let i = 0; i < response.length; i++) {
      let temp = JSON.stringify(response[i]);
      temp = JSON.parse(temp);
      responses.push(temp.id);
    }
  }

  if (catagories) {
    filter_counter++;
    const promise = new Promise((resolve, reject) => {
      mysqlClient.query(queryString3, [catagories], (err, rows, fields) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    const response = await promise;
    for (let i = 0; i < response.length; i++) {
      let temp = JSON.stringify(response[i]);
      temp = JSON.parse(temp);
      responses.push(temp.bookId);
    }
  }
  if (courses) {
    filter_counter++;
    const promise = new Promise((resolve, reject) => {
      mysqlClient.query(queryString4, [courses], (err, rows, fields) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    const response = await promise;
    for (let i = 0; i < response.length; i++) {
      let temp = JSON.stringify(response[i]);
      temp = JSON.parse(temp);
      responses.push(temp.bookId);
    }
  }

  responses.sort();
  const final_responses = [];
  responses.push(-1);

  let cnt = 0;
  for (let i = 0; i < responses.length - 1; i++)
    if (responses[i] == responses[i + 1]) {
      cnt++;
    } else {
      cnt++;
      if (cnt == filter_counter) final_responses.push(responses[i]);
      cnt = 0;
    }

  const promise = new Promise((resolve, reject) => {
    mysqlClient.query(queryString5, [final_responses], (err, rows, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });

  const results = await promise;

  for (let i = 0; i < results.length; i++) {
    results[i] = JSON.parse(JSON.stringify(results[i]));
  }

  res.json(results);
}
