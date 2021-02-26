import React, { Component } from 'react';
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="Projects section">
        <h1>Projects</h1>
        <div className="column">
          <h3>Non-Invasive Transcranial Stimulation</h3>
          <h3>FiPass/Talent Pool</h3>
          <h3>Time-Space-Aware Memory for Deep Reinforcement Learning</h3>
          <h3>Diabetic Retinopathy Detection</h3>
          <h3>Questions Asking and Answering System</h3>
          <h3>Smart Mirror</h3>
          <h3>Wireless VR Headset</h3>
        </div>
      </div>
    );
  }
}

export default Projects;
