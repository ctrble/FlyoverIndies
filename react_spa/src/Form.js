import React, { Component } from 'react';

// <form action="https://formspree.io/contact@flyoverindies.party" method="POST">
//     <input type="text" name="name" placeholder='Your name' />
//     <input type="text" name="_replyto" placeholder="Your email" />
//     <textarea type="text" name="_message" placeholder="Your message" />
//     <input type="hidden" name="_next" value="/" />
//     <input type="text" name="_gotcha" style={{display: 'none'}} />
//     <input type="submit" value="Send" />
// </form>

class Form extends React.Component {

  render() {
    return (
      <div className="content">
        <form action="https://formspree.io/contact@flyoverindies.party" method="POST">
          <div className="field">
            <label className="label" name="name">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label" name="_replyto">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Email input" />
            </div>
          </div>

          <div className="field">
            <label className="label" name="_subject">Subject</label>
            <div className="control">
              <input className="input" type="text" placeholder="Subject" />
            </div>
          </div>

          <div className="field">
            <label className="label" name="_message">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <input type="hidden" name="_next" value="/" />
          <input type="text" name="_gotcha" style={{display: 'none'}} />

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
     );
  }
}

export default Form;
