import React, { Component } from 'react';

class MediaImage extends React.Component {
  render() {
    return (
      <figure className="media-left">
        <p className={this.props.classes}>
          {this.props.photo}
        </p>
      </figure>
    );
  }
}

class MediaContent extends React.Component {
  render() {
    return (
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
    );
  }
}

class MediaObject extends React.Component {

  render() {
    return (
      <article className="media">
        <MediaImage photo="" classes="image is-64x64"/>
        <MediaContent />
      </article>
    );
  }
}

export default MediaObject;
