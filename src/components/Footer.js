import React, { Component } from 'react';
import reactLogo from '../img/react_logo.svg';
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        Powered By
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          <img src={reactLogo} className="icon" alt="logo" />
        </a>
      </div>
    );
  }
}

export default Footer;
