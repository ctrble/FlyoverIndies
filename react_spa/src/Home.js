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
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-8 is-vertical is-parent">
            <div className="tile is-child box">

              <article className="tile is-child">
                <About />
              </article>

            </div>
            <div className="tile is-child box">

              <article className="tile is-child">
                <div className="content">
                  <Resources />
                </div>
              </article>

            </div>
            <div className="tile is-child box">

              <article className="tile is-child">
                <div className="content">
                  <GetInTouch />
                </div>
              </article>

            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">

              <article className="tile is-child">
                <Events />
              </article>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
