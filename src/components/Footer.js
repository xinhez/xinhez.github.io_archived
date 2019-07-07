import React, { Component } from 'react';
import reactLogo from '../img/react_logo.svg';
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        Last edit on 07/07/2019. Powered By
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          <img src={reactLogo} className="icon icon-animate" alt="logo" />
        </a>
      </div>
    );
  }
}

export default Footer;
