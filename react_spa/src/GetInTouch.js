import React, { Component } from 'react';
import Form from './Form';

class GetInTouch extends React.Component {

  render() {
    return (
      <div className="content">
        <p className='title'>Get In Touch</p>
        <p><a href='https://discord.gg/EZPJe3P'>Join our Discord!</a></p>
        <p><a href='https://twitter.com/FlyoverIndies'>Twitter</a></p>
        <p><a href='https://www.facebook.com/flyoverindies/'>Facebook</a></p>
        <p>Send us an email:</p>
        <Form />
      </div>
     );
  }
}

export default GetInTouch;
