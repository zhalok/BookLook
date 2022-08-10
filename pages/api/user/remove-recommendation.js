import { DeleteOutline } from "@mui/icons-material";

const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  try {
    if (req.method != "DELETE") {
      res.status(400).json({ message: "Bad request" });
      return;
    }

    const { bookId, userId } = req.query;
    console.log(userId, bookId);

    const data = await new Promise((resolve, reject) => {
      const readQueryString =
        "select * from user_recommendation where userId=? and bookId=?";
      mysqlClient.query(readQueryString, [userId, bookId], (err1) => {
        if (err1) reject(err1);
        else {
          const deleteQueryString =
            "delete from user_recommendation where userId=? and bookId=?";
          mysqlClient.query(deleteQueryString, [userId, bookId], (err2) => {
            if (err2) reject(err2);
            else resolve({ message: "recommendation updated" });
          });
        }
      });
    });
    res.json(data);
    // res.status(200).json({ message: "Recommendation Updated" });
  } catch (e) {
    res.json(e);
  }
}
