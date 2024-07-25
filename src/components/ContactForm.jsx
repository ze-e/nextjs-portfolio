import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '@/styles/contactform.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Email successfully sent!');
      }, (error) => {
        console.error('There was an error sending the email:', error.text);
        alert('There was an error sending the email.');
      });

    setFormData({
      userEmail: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div>
        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          id="userEmail"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
