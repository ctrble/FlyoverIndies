import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import Button from 'src/components/global/Button';

const ContactForm = () => {
  const [messageContent, setMessageContent] = useState('');
  // https://formspree.io/forms/xleabbda/integration
  const [state, handleSubmit] = useForm('xleabbda', {
    data: { _subject: 'New form submission' },
  });

  if (state.succeeded) {
    return (
      <p>
        Thanks for messaging us! We&apos;ll get back to you ASAP, check your
        spam if you don&apos;t see a response.
      </p>
    );
  }

  const handleInput = (event) => {
    setMessageContent(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {messageContent}
      <label htmlFor="email">
        Email Address
        <input id="email" type="email" name="email" placeholder="your email" />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">
        Message
        <textarea
          onChange={handleInput}
          id="message"
          name="message"
          placeholder="Ask a question, send us feedback, show off your game, or just say hi!"
        />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button
        type="submit"
        disabled={messageContent === '' || state.submitting}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
