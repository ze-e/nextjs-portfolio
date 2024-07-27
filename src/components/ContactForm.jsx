import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '@/styles/contactform.module.scss';
import {Title, Text} from '@/components/index'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    message: ''
  });

  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !userID) {
      console.error('Missing required environment variables');
      setError('Missing required environment variables');
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      console.log('Email successfully sent!', result.text);
      setFormSent(true);
    }
    catch (e) {
      console.error('There was an error sending the email:', e.text);
      setError(e.text);
    }
    finally {
      setLoading(false);
    }

    setFormData({
      userEmail: '',
      message: ''
    });
  };

  return (formSent ? 
    (<div className={error ? styles.error : styles.formSent}>{
      error ? 
      error : "Form sent successfully!"}</div>) : 
      (<form onSubmit={handleSubmit} className={styles.container}>
        <Title style={{color: 'white' }}>Contact Us</Title>
        <Text style={{color: 'white', marginBottom: "30px" }}>Contact us for a free 1-on-1 consultation</Text>
        <div className={styles.formItem}>
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            required
            placeholder='Type your email here'
          />
        </div>
        <br/>
        <div className={styles.formItem}>
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
        <button className={styles.button} type="submit" disabled={loading}>
          {!loading ? "Send!" : "Loading..."}
        </button>
      </form>));
};

export default ContactForm;
