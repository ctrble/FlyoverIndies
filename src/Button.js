import React, { Component } from 'react';

class Button extends React.Component {

  // <Button text='Test' />

  render() {
    return (
      <button className="button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
