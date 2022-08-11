const mysqlClient = require("../../../../utils/database_connection");
const firebaseStorage = require("../../../../utils/firebaseConnection");
import { ref, deleteObject } from "firebase/storage";

export default async function handler(req, res) {
  // res.json(firebaseStorage);
  const { id } = req.query;
  try {
    const data = await new Promise((reject, resolve) => {
      const readQueryString = "select id from books where id=?";
      mysqlClient.query(readQueryString, [id], (err, rows) => {
        if (err) reject(err);
        else {
          if (rows.length == 0) {
            reject({ message: "Book not found" });
            return;
          }
          const deleteQueryString = "delete from books where id=?";
          mysqlClient.query(deleteQueryString, [id], (err1) => {
            if (err1) reject(err1);
            else {
              resolve({ message: "Book Deleted" });
              // console.log(id);
              // const fileRef = ref(firebaseStorage, id);
              // deleteObject(fileRef)
              //   .then(() => {
              //     resolve({ message: "Book Deleted Successfully" });
              //   })
              //   .catch((err2) => {
              //     reject(err2);
              //   });
            }
          });
        }
      });
    });
    res.json(data);
  } catch (e) {
    res.json(e);
  }
}
