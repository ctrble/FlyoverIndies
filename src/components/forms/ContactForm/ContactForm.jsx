/* eslint-disable jsx-a11y/label-has-associated-control */
// TODO: build the real form
import React from 'react';

const ContactForm = () => (
  <div className="content">
    <form
      action="https://formspree.io/contact@flyoverindies.party"
      method="POST"
    >
      <label>
        Name
        <input type="text" placeholder="Your name" name="name" />
      </label>

      <label>
        Email
        <input type="email" placeholder="Your email" name="_replyto" />
      </label>

      <label>
        Subject
        <input type="text" placeholder="Hello!" name="_subject" />
      </label>

      <label>
        Message
        <textarea
          placeholder="Ask a question, send us feedback, show off your game, or just say hi!"
          name="_message"
        />
      </label>

      <input type="hidden" name="_next" value="/" />
      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default ContactForm;
