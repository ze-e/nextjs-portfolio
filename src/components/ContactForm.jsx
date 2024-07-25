import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '@/styles/contactform.module.scss';
import {Title, Text} from '@/components/index'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
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
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Title style={{color: 'white', }}>Contact Us</Title>
      <Text style={{color: 'white', }}>Contact us for a free 1-on-1 consultation</Text>
      <div style={{display: "flex", flexDirection: "column"}}>
        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          id="userEmail"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          required
          placeholder='Type your email here...'
        />
      </div>
      <br/>
      <div style={{display: "flex", flexDirection: "column"}}>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder='How can we help you?'
        ></textarea>
      </div>
      <br/>
      <button className={styles.button} type="submit">
        Send!
      </button>
    </form>
  );
};

export default ContactForm;
