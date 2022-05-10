const sendMail = require("../../../utils/send_email");

export default async function (req, res) {
  const { to, message } = req.body;
  if (req.method != "POST") {
    res.status(405).json({ message: "Wrong method" });
  }
  try {
    await sendMail(to, message);
    res.json("Email Sent");
  } catch (e) {
    res.json(e);
  }
}
