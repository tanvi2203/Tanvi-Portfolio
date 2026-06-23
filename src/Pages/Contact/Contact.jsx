import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {

  const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_9nkol3e',
      'template_g8tw0iv',
      form.current,
      '8ZODUkYyZJmDEl0pr'
    )
    .then(
      () => {
        alert('Message sent successfully!');
        e.target.reset();
      },
      // (error) => {
      //   console.log(error);
      //   alert('Failed to send message');
      // }
      (error) => {
  console.log('ERROR:', error);
  alert(JSON.stringify(error));
}
    );
};
  return (
    <div className="contact-section">
       <h1 className="contact-main-heading">Contact</h1>
  <div className="contact-container">
    <div className="contact-left">
      <img src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif" alt="Programmer" className="contact-image"/>
    </div>

    <div className="contact-right">
    <h2 className="get-in-touch-heading">Get In Touch</h2>
      <form ref={form}
  onSubmit={sendEmail}
  className="contact-form">
        <div className="form-row">
        <input type="text" name="first_name" placeholder="First Name" required/>
         <input type="text" name="last_name" placeholder="Last Name" required/>
        </div>
        <div className="form-row">
         <input type="email" name="email" placeholder="Email Address" required/>
         <input type="tel" name="phone" placeholder="Phone No." required/>
        </div>
       <textarea name="message" placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Contact;




