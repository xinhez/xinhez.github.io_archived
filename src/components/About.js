import React, { Component } from 'react';
import profile from '../img/profile.JPG';
import "./About.css";

class About extends Component {
  render() {
    return (
      <div id="about" className="About">
        <img src={profile} alt="profile" />
        <div className="About-column">
          <h3>Chapter Three | August 2019 - Current</h3>
          <h4>(Time for some more Data and Science.)</h4>
          <p>I decided to go back to CMU to pursue an M.S. in ECE degree. Enrolled in many courses on Machine Learning, Data Science, and Entrepreneurship. </p>
          <h3>Chapter Two | August 2014 - August 2019</h3>
          <h4>(I became a full-stack engineer.)</h4>
          <p>Turns out I was interested in web development, signal processing, and machine learning. I am grateful to have the opportunities to work full-time for some most awesome companies as a software engineer, as well as research on some interesting problems of machine learning.</p>
          <h3>Chapter One | May 1996 - August 2014</h3>
          <h4>(I wanted to study cool things.)</h4>
          <p>I studied and studied. I applied to Carnegie Mellon University because Robotics and Drama both sound so cool. Fortunately, I was accepted. </p>
        </div>
      </div>
    );
  }
}

export default About;
