import React, { Component } from 'react';
import info from '../img/info.JPG';
import "./Education.css";

class Education extends Component {
  render() {
    return (
      <div>
        <div className="Education-background" >
          <img src={info} alt="background" />
        </div>
        <div id="education" className="Education section">
          <h1>Education</h1>
          <div className="column">
            <h2>Carnegie Mellon University</h2>
            <h3>M.S. in Electrical and Computer Engineering | Expected in December 2020</h3>
            <p>Tentative schedule: Advanced Introduction to Machine Learning, Introduction to Deep Learning, Introduction to Entrepreneurship, etc.</p>

            <h3>B.S. in Electrical and Computer Engineering | May, 2018</h3>
            <h4>3.68/4.0 with College and University Honor</h4>
            <p>Courses: Introduction to Machine Learning, Deep Reinforcement Learning and Control, Natural Language Processing, etc.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
