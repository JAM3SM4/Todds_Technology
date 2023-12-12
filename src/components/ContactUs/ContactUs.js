import React from 'react';

const ContactUs = () => (
  <div className="contact-us">
    <h2>Contact Us</h2>
    <p>Have a question or want to get in touch? Fill out the form below:</p>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="4" required />

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default ContactUs;