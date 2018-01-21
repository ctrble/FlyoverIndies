import React, { Component } from 'react';

class Events extends React.Component {

  render() {
    return (
      <div className="content">
        <p className='title fi-title'>Upcoming Events</p>
        <div className="fb-page" data-href="https://www.facebook.com/flyoverindies/" data-tabs="events" data-width="500" data-height="1000" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false">
          <blockquote cite="https://www.facebook.com/flyoverindies/" className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/flyoverindies/">Flyover Indies</a>
          </blockquote>
        </div>
      </div>
     );
  }
}

export default Events;
