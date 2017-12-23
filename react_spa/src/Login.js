import React, { Component } from 'react';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.checkLoginState = this.checkLoginState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.statusChangeCallback = this.statusChangeCallback.bind(this);
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
      <div className="container">

        <div id='status'></div>

        <button onClick={this.handleClick}>
          Button
        </button>

      </div>
    );
  }
}

export default Login;
