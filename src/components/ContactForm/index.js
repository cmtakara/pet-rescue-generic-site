import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fleattm', 'template_qeck7cg', form.current, 'user_lbk6j3laEv5DgtgEizyoP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div>
            <label>Name</label>
            <input type="text" name="user_name" />
        </div>
        <div>
            <label>Email</label>
            <input type="email" name="user_email" />
        </div>
        <div>
            <label>Message</label>
            <textarea name="message" />
        </div>
      <input type="submit" value="Send" />
    </form>
  );
};