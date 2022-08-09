import { deleteObject } from "firebase/storage";

const mysqlClient = require("../../../../utils/database_connection");
const firebaseStorage = require("../../../../utils/firebaseConnection");
export default async function handler(req, res) {
  if (req.method != "DELETE") {
    res.status(400).json({ message: "Bad request" });
    return;
  }
  const { id } = req.query;
  try {
    const data = await new Promise((resolve, reject) => {
      const queryString = "select id from books where uploader=?";
      mysqlClient.query(queryString, [id], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data);
      const fileRef = ref(firebaseStorage, `${data[0].id}`);
      await deleteObject(fileRef);
    }
    await new Promise((resolve, reject) => {
      mysqlClient.query(
        "delete from books where uploader=?",
        [id],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
    await new Promise((resolve, reject) => {
      const queryString = "delete from users where id=?";
      mysqlClient.query(queryString, [id], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });

    res.json({ message: "User deleted" });
  } catch (e) {
    res.json(e);
  }
}
