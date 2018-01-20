import React, { Component } from 'react';
import About from './About';
import Events from './Events';
import GetInTouch from './GetInTouch';
import Resources from './Resources';
import Button from './Button';

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=1757685217787242';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

class Home extends React.Component {

  render() {
    return (
      <div className="container fi-container">
        <div className="tabs is-right is-large">
          <ul>
            <li>
              <a href='https://discord.gg/EZPJe3P'>
                <span class="icon is-small"><i class="fas fa-discord"></i></span>
                <span>Discord</span>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/FlyoverIndies'>
                <span class="icon is-small"><i class="fas fa-twitter"></i></span>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/flyoverindies/'>
                <span class="icon is-small"><i class="fas fa-facebook"></i></span>
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="box fi-box">
          <Events />
        </div>
        <div className="box">
          <About />
        </div>
        <div className="box">
          <GetInTouch />
        </div>
        <div className="box">
          <Resources />
        </div>
      </div>
    );
  }
}

export default Home;
