// email-sender.js
const nodemailer = require('nodemailer');

// Créer un transporteur SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Remplacez par votre adresse email
    pass: 'your-password' // Remplacez par votre mot de passe
  }
});

// Définir les options de l'email
const mailOptions = {
  from: 'your-email@gmail.com', // Votre adresse email
  to: 'recipient@example.com', // Adresse email du destinataire
  subject: 'Test Email',
  text: 'This is a test email from Node.js'
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
