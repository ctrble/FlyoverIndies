import React, { Component } from 'react';

class Form extends React.Component {

  render() {
    return (
      <div className="content">
        <form action="https://formspree.io/contact@flyoverindies.party" method="POST">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input"  name="name" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Email input" name="_replyto" />
            </div>
          </div>

          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <input className="input" type="text" placeholder="Subject" name="_subject" />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea" name="_message"></textarea>
            </div>
          </div>

          <input type="hidden" name="_next" value="/" />
          <input type="text" name="_gotcha" style={{display: 'none'}} />

          <div className="field is-grouped">
            <div className="control">
              <button className="button fi-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
     );
  }
}

export default Form;
