import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import is from 'is_js';

import Button from 'src/components/global/Button';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [emailContent, setEmailContent] = useState('');
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

  const handleEmailInput = (event) => {
    setEmailContent(event.target.value);
  };

  const handleMessageInput = (event) => {
    setMessageContent(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email" className={styles.form__field}>
        Email Address
        <input
          className={styles.form__input}
          id="email"
          type="email"
          name="email"
          placeholder="your email"
          onChange={handleEmailInput}
        />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className={styles.form__field}>
        Message
        <textarea
          className={styles.form__input}
          id="message"
          name="message"
          placeholder="Ask a question, send us feedback, show off your game, or just say hi!"
          onChange={handleMessageInput}
        />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <div className={styles.form__submit}>
        <Button
          type="submit"
          disabled={
            is.not.email(emailContent) ||
            is.empty(messageContent) ||
            state.submitting
          }
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
