const nodemailer = require("nodemailer");
const fs = require("fs");

async function sendMail(to, message) {
  try {
    let transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "rahmanzhalok@gmail.com",
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

module.exports = sendMail;
