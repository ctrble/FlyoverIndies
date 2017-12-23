import React, { Component } from 'react';
import Login from './Login';

class Events extends React.Component {

  constructor(props) {
    super(props);
    // this.checkLoginState = this.checkLoginState.bind(this);
    this.getEvents = this.getEvents.bind(this);
    // this.statusChangeCallback = this.statusChangeCallback.bind(this);
  }

  // componentDidMount() {
  //   window.fbAsyncInit = function() {
  //     window.FB.init({
  //       appId: '1757685217787242', //random app number
  //       cookie: true,  // enable cookies to allow the server to access the session
  //       xfbml: true,  // parse social plugins on this page
  //       version: 'v2.11',
  //       status: true,
  //     });
  //     //JS SDK initialized, now you can use it
  //     window.FB.XFBML.parse();
  //
  //     window.FB.Event.subscribe('auth.authResponseChange', function(response) {
  //       this.checkLoginState();
  //     }.bind(this));
  //   }.bind(this);
  //
  //   // Load the SDK asynchronously
  //   (function(d, s, id) {
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s); js.id = id;
  //     js.src = "//connect.facebook.net/en_US/sdk.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'facebook-jssdk'));
  // }
  //
  // checkLoginState() {
  //   window.FB.getLoginStatus(function(response) {
  //     this.statusChangeCallback(response);
  //     console.log('checkLoginState ' + response);
  //   }.bind(this));
  // }
  //
  // statusChangeCallback(response) {
  //   console.log('statusChangeCallback ' + response);
  //   if (response.status === 'connected') {
  //
  //     this.getEvents();
  //
  //     window.FB.api('/me', function(response) {
  //       if (response && !response.error) {
  //         document.getElementById('status').innerHTML =
  //           'Thanks for logging in, ' + response.name + '!';
  //       }
  //     });
  //
  //   } else if (response.status === 'not_authorized') {
  //
  //     document.getElementById('status').innerHTML = 'Please log ' +
  //       'into this app.';
  //   } else {
  //
  //     document.getElementById('status').innerHTML = 'Please log ' +
  //     'into Facebook.';
  //   }
  // }

  componentDidMount() {
    console.log('heyo');
    // window.FB.XFBML.parse();
    // this.getEvents();
  }

  getEvents() {
    window.FB.api(
      '/1288441214569997/events',
      'GET',
      {},
      function (response) {
        if (response && !response.error) {
          console.log('events ' + response);
        }
      }
    );
  }


  render() {

    return (

      <div className="container">

        <Login />

      </div>
    );
  }
}

export default Events;
