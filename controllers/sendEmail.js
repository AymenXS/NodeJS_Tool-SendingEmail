const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'donald.rogahn56@ethereal.email',
      pass: 'PGu86fJFMsxQvtQkdk',
    },
  });

  let info = await transporter.sendMail({
    from: 'Ghost <aymenghaloua@gmail.com>',
    to: 'donald.rogahn56@ethereal.email',
    subject: 'Hello',
    html: '<h2>Sending Emails with NodeJS </h2>',
  });

  res.send('send email func');
};

module.exports = sendEmail;
