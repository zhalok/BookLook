const nodemailer = require("nodemailer");

// These id's and secrets should come from .env file.
// const CLIENT_ID = process.env.CLIENT_ID;
// const CLEINT_SECRET = process.env.CLEINT_SECRET;
// const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const CLIENT_ID =
  "361808704766-8t4lnmp06igb7sqf4qr3drmolcioaojr.apps.googleusercontent.com";
const CLEINT_SECRET = "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";

const ACCESS_TOKEN =
  "ya29.A0ARrdaM9FEfucMcphy8SAEC4ylFZh6a_vCXuN1FbGAR4oigG9oQyfGoPfHYGXLi4Hj4zpAACdAgJ6UcnjOyRPbusasaRvMirahEq9Cu8cNow0ZZtdHyKNrRjwRPk1W1-ZR7MAWLlCd6-jsZc7uNFT4m1TUFxl";

// console.log(CLIENT_ID, CLEINT_SECRET);

async function sendMail(to, message) {
  try {
    // const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "zhalokrahman007@gmail.com",
        clientId: CLIENT_ID,
        accessToken: ACCESS_TOKEN,
      },
    });

    const mailOptions = {
      from: "zhalokrahman007@gmail.com",
      to: to,
      subject: "Hello from gmail using API",
      text: `${message}`,
      html: `<h1>${message}</h1>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

const emails = [
  {
    to: "tabassumkaifa2@gmail.com",
    message: "Ei email paile ignore koirao hudai ditesi test korar jonne ",
  },
  {
    to: "reefat.raha2018@gmail.com",
    message: "Ei email paile ignore koirao hudai ditesi test korar jonne ",
  },
  {
    to: "Anikaaurpy123@gmail.com",
    message: "Ei email paile ignore koirao hudai ditesi test korar jonne ",
  },
  {
    to: "tasmiatahmida.8@gmail.com",
    message: "Ei email paile ignore koirao hudai ditesi test korar jonne ",
  },
];

emails.forEach(({ to, message }) =>
  sendMail(to, message)
    .then((result) => console.log("Email sent...", result))
    .catch((error) => console.log(error.message))
);
