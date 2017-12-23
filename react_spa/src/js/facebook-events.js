// document.addEventListener('DOMContentLoaded', function () {
//   window.fbAsyncInit = function() {
//     window.FB.init({
//       appId            : '1757685217787242',
//       autoLogAppEvents : true,
//       xfbml            : true,
//       version          : 'v2.11'
//     });
//   };
//
//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));
//
//   window.FB.getLoginStatus(function(response) {
//     if (response.status === 'connected') {
//       console.log('Logged in.');
//     }
//     else {
//       window.FB.login();
//     }
//   });
//
// });
//
// function callFacebook() {
//   window.FB.api(
//     '/1288441214569997/events',
//     'GET',
//     {},
//     function (response) {
//       if (response && !response.error) {
//         console.log(response);
//       }
//     }
//   );
// }

// <fb:login-button
//   scope="public_profile,email"
//   onlogin="checkLoginState();">
// </fb:login-button>
