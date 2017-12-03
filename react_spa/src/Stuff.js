import React, { Component } from 'react';
// import graphapi from './graphapi';
// import config from './config';
import FacebookLoginButton from './FacebookLoginButton';

class Stuff extends React.Component {

  state = {
    username: null
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }

  render() {
    const { username } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Social Media Login</h1>
        </header>

        <div className="App-intro">
          { !username &&
            <div>
              <p>Click on one of any button below to login</p>
              <FacebookLoginButton onLogin={this.onFacebookLogin}>
                <button>Facebook</button>
              </FacebookLoginButton>
            </div>
          }
          {username &&
            <p>Welcome back, {username}</p>
          }
        </div>
      </div>
    );
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //
  //   };
  // }
  //
  // loadFbLoginApi() {
  //
  //   window.fbAsyncInit = function() {
  //     window.FB.init({
  //       appId      : 1757685217787242,
  //       cookie     : true,  // enable cookies to allow the server to access
  //       // the session
  //       xfbml      : true,  // parse social plugins on this page
  //       version    : 'v2.5' // use version 2.1
  //     });
  //   };
  //
  //   console.log("Loading fb api");
  //     // Load the SDK asynchronously
  //   (function(d, s, id) {
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s); js.id = id;
  //     js.src = "//connect.facebook.net/en_US/sdk.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'facebook-jssdk'));
  // }
  //
  // componentDidMount() {
  //   this.loadFbLoginApi();
  // }
  //
  // testAPI() {
  //   console.log('Welcome!  Fetching your information.... ');
  //   window.FB.api('/me', function(response) {
  //   console.log('Successful login for: ' + response.name);
  //   document.getElementById('status').innerHTML =
  //     'Thanks for logging in, ' + response.name + '!';
  //   });
  // }
  //
  // statusChangeCallback(response) {
  //   console.log('statusChangeCallback');
  //   console.log(response);
  //   if (response.status === 'connected') {
  //     this.testAPI();
  //   } else if (response.status === 'not_authorized') {
  //       console.log("Please log into this app.");
  //   } else {
  //       console.log("Please log into this facebook.");
  //   }
  // }
  //
  // checkLoginState() {
  //   window.FB.getLoginStatus(function(response) {
  //     this.statusChangeCallback(response);
  //   }.bind(this));
  // }
  //
  // handleFBLogin() {
  //   window.FB.login(this.checkLoginState());
  // }
  //
  // render() {
  //   return (
  //     <div>
  //       <button
  //         id         = "btn-social-login"
  //         onClick = {this.handleFBLogin}
  //         >
  //           <span className="fa fa-facebook"></span> Sign in with Facebook
  //       </button>
  //     </div>
  //    );
  // }
}

export default Stuff;
