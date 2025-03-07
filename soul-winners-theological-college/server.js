// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Email transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'your-email@gmail.com', // Replace with your email
//     pass: 'your-email-password', // Replace with your email password
//   },
// });

// // Form submission endpoint
// app.post('/send-message', (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'organization-email@gmail.com', // Replace with the organization's email
//     subject: 'New Message from Contact Form',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Error sending message');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Message sent successfully');
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vivyannexeirah@gmail.com', // Replace with your email
    pass: 'your-email-password', // Replace with your email password or app password
  },
});

// Form submission endpoint
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'vivyannexeirah@gmail.com', // Replace with the organization's email
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending message');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Message sent successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});