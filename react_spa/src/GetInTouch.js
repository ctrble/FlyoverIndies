import React, { Component } from 'react';
import Form from './Form';

class GetInTouch extends React.Component {

  render() {
    return (
      <div className="content">
        <p className='title fi-title'>Get In Touch</p>
        <p>Send us an email:</p>
        <Form />
      </div>
     );
  }
}

export default GetInTouch;
