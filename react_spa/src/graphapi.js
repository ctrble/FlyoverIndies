// componentDidMount(){
//   // Load the required SDK asynchronously for facebook, google and linkedin
//   window.fbAsyncInit = function() {
//
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
//    }(document, 'script', 'facebook-jssdk'));
// }
//
// FB.api(
//   '/1288441214569997/events',
//   'GET',
//   {"event_state_filter<{published}>,time_filter":"upcoming"},
//   function(response) {
//       console.log(response);
//   }
// );
