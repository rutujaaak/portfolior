import React, { useState } from 'react';
import './code.css'; // Import the CSS file for styling

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      {/* HTML form that sends data to Web3Forms API */}
      <form action="https://api.web3forms.com/submit" method="POST">
        {/* Replace with your Access Key */}
        <input type="hidden" name="access_key" value="29d87955-808e-410f-bf08-ad3c59dc66ef" />

        {/* Form Inputs */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name..."
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email..."
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your phone number..."
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows="4"
          required
        ></textarea>

        {/* Honeypot Spam Protection */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        {/* Custom Confirmation / Success Page (Optional) */}
        {/* <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html"> */}

        <button type="submit" className="submit-button">Submit Form</button>
      </form>

      {/* Success message (Only shown after successful submission) */}
      {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
    </div>
  );
};

export default Contact;
