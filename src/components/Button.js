import React, { Component } from 'react';

class Button extends React.Component {

  render() {
    return (
      <button className='button fi-button' onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
