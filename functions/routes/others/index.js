const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { email } = req.body;
  const transporter = nodemailer.createTransport({
    host: "imap.gmail.com",
    port: 993,
    secure: true,
    auth: {
      user: "robertxmichalski",
      pass: "robert7918",
    },
  });
  const msg = {
    from: '"Fred Foo 👻" <foo@example.com>',
    to: `${email}`,
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  };
  const info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

module.exports = router;
