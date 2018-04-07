import React, { Component } from 'react';

class CodeOfConduct extends React.Component {

  render() {
    return (
      <div className="content">
        <p className='title fi-title'>Code of Conduct</p>
        <p className='subtitle'>Community Standards</p>
        <p>
          In the interest of fostering an open and welcoming environment, Flyover Indies pledges to make participation in our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation. We expect participants in our community to abide by these standards.
        </p>
        <p className='subtitle'>Reporting</p>
        <p>
          Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting us by using the form above or directly at <a href='mailto:contact@flyoverindies.party'>contact [at] flyoverindies [dot] party</a>. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances, which may include expulsion from our community. We will maintain confidentiality with regard to the reporter of an incident.
        </p>
      </div>
     );
  }
}

export default CodeOfConduct;
