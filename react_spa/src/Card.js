import React, { Component } from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-16by9">
            <img src={this.props.image} alt={this.props.alt} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4"><a className='link' href={this.props.link}>{this.props.title}</a></p>
              <p className="subtitle is-6">{this.props.subtitle}</p>
              {this.props.body}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
