import React, { Component } from 'react';
import reactLogo from '../img/react_logo.svg';
import "./Footer.css";

class Footer extends Component {
  render() {
    let newDate = new Date()
    let date  = 9;
    let month = 11;
    let year  = 2020;
    return (
      <div className="Footer">
        <p>Last edit on {month}/{date}/{year}.</p>

        <p>
          Email: <a href="mailto:xinhez96@gmail.com">xinhez96@gmail.com</a>
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
