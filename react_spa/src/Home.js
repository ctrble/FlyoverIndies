import React, { Component } from 'react';
// import Events from './Events';
import Button from './Button';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.checkLoginState = this.checkLoginState.bind(this);
    this.statusChangeCallback = this.statusChangeCallback.bind(this);
    // this.getEvents = this.getEvents.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '1757685217787242', //random app number
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.11',
        status: true,
      });

      //JS SDK initialized, now you can use it
      window.FB.XFBML.parse();

      //returned at the very beginning
      // this.getEvents();

      window.FB.Event.subscribe('auth.authResponseChange', function(response) {
        this.checkLoginState();
      }.bind(this));
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  componentWillUnmount() {
    window.FB.Event.subscribe('auth.authResponseChange', function(response) {
      this.checkLoginState();
    }.bind(this));
  }

  checkLoginState() {
    window.FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
      console.log('checkLoginState ' + response);
    }.bind(this));
  }

  statusChangeCallback(response) {
    console.log('statusChangeCallback ' + response);
    if (response.status === 'connected') {

      window.FB.api('/me', function(response) {
        if (response && !response.error) {
          document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        }
      });

    } else if (response.status === 'not_authorized') {

      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {

      document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
    }
  }

  // getEvents() {
  //   window.FB.api(
  //     '/1288441214569997/events',
  //     'GET',
  //     {},
  //     function (response) {
  //       if (response) {
  //         console.log('events ' + response);
  //         document.getElementById('events-list').innerHTML = response;
  //       }
  //     }
  //   );
  // }

  handleClick() {
    window.FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {

        console.log('Initiating log out');
        window.FB.logout();

      } else if (response.status === 'not_authorized') {

        console.log('Initiating log out of unauthorized app');
        window.FB.logout();

      } else {

        console.log('Initiating log in');
        window.FB.login();
      }
    });
  }

  render() {
    return (
      <div className="">

        <h1 className='title'>Login with Facebook</h1>

        <div id='status'></div>

        <Button onClick={this.handleClick}>
          <span className="">
            Click Me
          </span>
        </Button>

      </div>
    );
  }

}

class Home extends React.Component {

  render() {
    return (
      <div className="container">

        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <h1 className='title'>Hello</h1>
              <p>Here&#8217;s some filler text and stuff.</p>
            </div>
            <div className="tile is-child box">
              <Login />
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h1 className="title">Events</h1>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
