import { ClassNames } from "@emotion/react";

const mysqlClient = require("../../../utils/database_connection");
export default async function handler(req, res) {
  try {
    const { userId, bookId } = req.query;

    if (!userId) {
      const data = await new Promise((resolve, reject) => {
        const queryString = `select * from user_recommendation`;
        mysqlClient.query(queryString, (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        });
      });

      res.status(200).json(data);
      return;
    }
    if (userId && bookId) {
      const data = await new Promise((resolve, reject) => {
        const queryString = `select bookId from user_recommendation where userId=?`;
        mysqlClient.query(queryString, [userId], (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        });
      });

      res.status(200).json(data);
    }
  } catch (e) {
    res.json(e);
  }
}
