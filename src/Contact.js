import React, { Component } from 'react';
import Form from './components/Form';

class Contact extends React.Component {

  render() {
    return (
      <div className="content">
        <p className='title fi-title'>Get In Touch</p>
        <p className='subtitle'>Send us an email!</p>
        <Form />
      </div>
     );
  }
}

export default Contact;
