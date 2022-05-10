const { google } = require("googleapis");
const fs = require("fs");
export default function handler(req, res) {
  const { code } = req.query;
  const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
  let credentials = fs.readFileSync(
    "/home/zhalok/Desktop/BookLook/credentials.json"
  );
  credentials = JSON.parse(credentials);
  const { client_secret, client_id, redirect_uris } = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  oAuth2Client.getToken(code, (err, token) => {
    // console.log(token);
    res.json({ message: "Got the access token babay!!!", token });
  });
}
