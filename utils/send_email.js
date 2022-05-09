const nodemailer = require("nodemailer");

// These id's and secrets should come from .env file.
// const CLIENT_ID = process.env.CLIENT_ID;
// const CLEINT_SECRET = process.env.CLEINT_SECRET;
// const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const CLIENT_ID =
  "361808704766-8t4lnmp06igb7sqf4qr3drmolcioaojr.apps.googleusercontent.com";
const CLEINT_SECRET = "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";

const ACCESS_TOKEN =
  "ya29.A0ARrdaM-rWSIc8yzHF1kUUn_Ala9WNiAmNzHvuE66B3ZslT-AdEQ_vY9anrbivstcXlpR2tElM-OPttomwId_ag-edGlH3rOals4TAgZnpwcqNlB675FXgIQF-B6FLM2HOzfn4U5li0qAHGAL4uXbpBLOkNzZ";

console.log(CLIENT_ID, CLEINT_SECRET);

async function sendMail() {
  try {
    // const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "zhalokrahman007@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        accessToken: ACCESS_TOKEN,
      },
    });

    const mailOptions = {
      from: "zhalokrahman007@gmail.com",
      to: "zhalokrahman007@gmail.com",
      subject: "Hello from gmail using API",
      text: "Hello from gmail email using API",
      html: "<h1>Hello from gmail email using API</h1>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log("Email sent...", result))
  .catch((error) => console.log(error.message));
