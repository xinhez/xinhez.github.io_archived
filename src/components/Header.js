import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  componentDidMount() {
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    window.addEventListener('scroll', function (_) {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky-top");
      } else {
        header.classList.remove("sticky-top");
      }
    });
  }

  render() {
    return (
      <div id="myHeader" className="Header">
        <div className="Header-tab">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
        </div>
      </div>
    );
  }
}

export default Header;
