const nodemailer = require("nodemailer");
const fs = require("fs");

async function sendMail(to, message) {
  try {
    var transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "9028737e3001b3",
        pass: "27c7c444a88bce",
      },
    });

    const mailOptions = {
      from: "zhalokrahman007@gmail.com",
      to: to,
      subject: "Hello from nodemailer",
      text: `${message}`,
      html: `<h1>${message}</h1>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail(
  "upalkundu287@gmail.com",
  "I am sorry if you are getting this email please ignore"
)
  .then((e) => {
    console.log("YES");
    console.log(e);
  })
  .catch((e) => {
    console.log("No");
    console.log(e);
  });

module.exports = sendMail;
