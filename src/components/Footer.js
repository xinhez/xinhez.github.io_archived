import React, { Component } from 'react';
import reactLogo from '../img/react_logo.svg';
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>Last edit on 07/07/2019.</p>

        <p>
          Email: <a href="mailto:xinhez@andrew.cmu.edu">xinhez@andrew.cmu.edu</a>
        </p>

        <p className="flex-row">
          Powered by
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            <img src={reactLogo} className="icon icon-animate" alt="logo" />
          </a>
        </p>
      </div >
    );
  }
}

export default Footer;
