import React, { Component } from 'react';
// import Login from './Login';
import Events from './Events';

class Home extends React.Component {

  render() {
    return (
      <div className="container">
        <h1 className='title'>Hello</h1>
        <p>Here&#8217;s some filler text and stuff.</p>

        
        <Events />

      </div>
    );
  }
}

export default Home;
