import React, { Component } from 'react';
import Button from './Button';

class Events extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
    this.checkLoginState = this.checkLoginState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.testAPI = this.testAPI.bind(this);
    this.statusChangeCallback = this.statusChangeCallback.bind(this);
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '1757685217787242', //random app number
        cookie: true,  // enable cookies to allow the server to access
                          // the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.11',
        status: true,
      });
      //JS SDK initialized, now you can use it
      window.FB.XFBML.parse();

      window.FB.Event.subscribe('auth.statusChange', function(response) {
        if (response.authResponse) {
          this.checkLoginState();
          console.log('User is logged in.');
        } else {
          this.checkLoginState();
          console.log('User is not logged in.');
        }
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

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  checkLoginState() {
    window.FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
      console.log('checkLoginState ' + response);
    }.bind(this));
  }

  // This is called with the results from from FB.getLoginStatus().
  statusChangeCallback(response) {
    console.log('statusChangeCallback ' + response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      this.setState(prevState => ({
        isLoggedIn: true
      }));
      this.testAPI();

    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      this.setState(prevState => ({
        isLoggedIn: false
      }));
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      this.setState(prevState => ({
        isLoggedIn: false
      }));
      document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
    }
  }

  handleClick() {

    window.FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // the user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token
        // and signed request each expire
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;

        console.log('Initiating log out');
        window.FB.logout();

      } else if (response.status === 'not_authorized') {
        // the user is logged in to Facebook,
        // but has not authenticated your app
      } else {
        // the user isn't logged in to Facebook.
        console.log('Initiating log in');
        window.FB.login();
      }
     });
  }

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  testAPI() {

    window.FB.api('/me', function(response) {
      if (response && !response.error) {

        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';

      } else {
        console.log(response);
      }
    });

    window.FB.api(
      '/1288441214569997/events',
      'GET',
      {},
      function (response) {
        if (response && !response.error) {
          console.log(response);
        }
      }
    );
  }

  render() {
    return (
      <div className="container">

        <div id='status'></div>

        <button onClick={this.handleClick}>
          {this.state.isLoggedIn ? 'Log Out' : 'Log In'}
        </button>

      </div>
    );
  }
}

export default Events;
