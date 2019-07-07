import React, { Component } from 'react';
import "./Experience.css";

class Experience extends Component {
  render() {
    return (
      <div id="experience" className="Experience section">
        <h1>Experience</h1>
        <div className="column">
          <h2>Duolingo</h2>
          <h4>Android Developer | November 2018 - May 2019</h4>
          <p>Implemented UI and purchase experiments on Duolingo Android app and increased daily avenue.</p>

          <h2>Expii</h2>
          <h4>Engineer Intern | August 2018 - November 2018</h4>
          <p>Implemented new designs across the stack and collaborated with the content team to improve SEO results as the sole engineer.</p>

          <h2>Facebook</h2>
          <h4>Software Engineer Intern | May 2018 - August 2018</h4>
          <p>Designed and implemented a web app with user-specified parameters that can query from databases and collectively display the results in React, GraphQL, and PHP.</p>

          <h2>Google</h2>
          <h4>Software Engineering Intern | May 2017 - August 2017</h4>
          <p>Designed, implemented and documented an interactive visualization tool comparing multiple datasets in AngularJS and D3.js. Also improved the frontend filtering method by manipulating D3.js transitions for a visualization tool with 100 daily users.</p>

          <h4>Engineering Practicum Intern | May 2016 - August 2016</h4>
          <p>Implemented backend server in C++ and created a web-based, rotatable display of geospatial data in 3d space using WebGL and Google Maps API.</p>
        </div>
      </div>
    );
  }
}

export default Experience;
