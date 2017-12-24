import React, { Component } from 'react';

class CardImage extends React.Component {
  render() {
    return (

      <div className="card-image">
        <figure className="image is-4by3">
          {this.props.photo}
        </figure>
      </div>
    );
  }
}

class CardContent extends React.Component {
  render() {
    return (
      <div className="card-content">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Event Name</strong> <small>Place and Time</small>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <a className="button is-info">RSVP</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

class Card extends React.Component {

  render() {
    return (
      <div className="card">
        <CardImage photo=""/>
        <CardContent />
      </div>
    );
  }
}

export default Card;
