import React from 'react';
import './Contact.css';

function Contact () {
  return (
    <div className="contact-section">
       <h1 className="contact-main-heading">Contact</h1>
  <div className="contact-container">
    <div className="contact-left">
      <img
        src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
        className="contact-image"/>
    </div>

    <div className="contact-right">
    <h2 className="get-in-touch-heading">Get In Touch</h2>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone No." required />
        </div>
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Contact;




