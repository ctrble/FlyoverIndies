import React, { Component } from 'react';
import About from './About';
import Events from './Events';
import GetInTouch from './GetInTouch';
import Resources from './Resources';
import Button from './Button';
import logo from './img/logos/text-logo.png';
import discordIcon from './img/icons/discord.svg';
import facebookIcon from './img/icons/facebook.svg';
import twitterIcon from './img/icons/twitter.svg';


class Home extends React.Component {

  render() {
    return (
      <div className="container fi-container">
        <figure class="image is-4x3 fi-logo">
          <img src={logo} alt="Flyover Indies" />
        </figure>
        <div className="tabs is-right is-large">
          <ul>
            <li>
              <a href='https://discord.gg/EZPJe3P'>
                <span class="icon">
                  <img src={discordIcon} alt="Discord" />
                </span>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/flyoverindies/'>
                <span class="icon">
                  <img src={facebookIcon} alt="Facebook" />
                </span>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/FlyoverIndies'>
              <span class="icon">
                <img src={twitterIcon} alt="Twitter" />
              </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="box">
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
