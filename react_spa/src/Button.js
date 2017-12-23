import React, { Component } from 'react';

class Button extends React.Component {

  // <Button text='Test' />

  render() {
    return (
      <button className="button">
        {this.props.text}
      </button>
    );
  }
}

export default Button;
