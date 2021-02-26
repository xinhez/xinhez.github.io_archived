import React, { Component } from 'react';
import background from '../img/background.JPG';
import "./Cover.css";

class Cover extends Component {
  render() {
    return (
      <div className="Cover">
        <img src={background} className="Cover-img" alt="background" />
        <div className="Cover-text">
          <h1>
            I'm Xinhe Zhang.
          </h1>
          <h2>
            Researcher @ CMU. Focusing on Neuroscience. Once a full-stack engineer.
          </h2>
        </div>
      </div>
    );
  }
}

export default Cover;
