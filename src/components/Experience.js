import React, { Component } from 'react';
import "./Experience.css";

class Experience extends Component {
  render() {
    return (
      <div id="experience" className="Experience section">
        <h1>Experience</h1>
        <div className="column">
          <h2>IEEE Honor Society Eta Kappa Nu (HKN), Sigma Chapter</h2>
          <h4>Corresponding Secretary | August 2017 - May 2018</h4>
          <h4>Elected Member | Since November 2016</h4>

          <h2>CMU IEA</h2>
          <h4>Advisor | May 2018 - May 2019 | Pittsburgh, PA</h4>
          <h4>Co-president | May 2017 - May 2018 | Pittsburgh, PA & Mountain View, CA</h4>
          <h4>Panel Co-director | December 2016 - May 2017 | Pittsburgh, PA</h4>


          <h2>Duolingo</h2>
          <h4>Android Developer | November 2018 - May 2019 | Pittsburgh, PA</h4>
          <p>Implemented UI and purchase experiments on Duolingo Android app and increased daily avenue.</p>

          <h2>Expii</h2>
          <h4>Engineer Intern | August 2018 - November 2018 | Pittsburgh, PA</h4>
          <p>Implemented new designs across the stack and collaborated with the content team to improve SEO results as the sole engineer.</p>

          <h2>Facebook</h2>
          <h4>Software Engineer Intern | May 2018 - August 2018 | Seattle, WA</h4>
          <p>Designed and implemented a web app with user-specified parameters that can query from databases and collectively display the results in React, GraphQL, and PHP.</p>

          <h2>Google</h2>
          <h4>Software Engineering Intern | May 2017 - August 2017 | Mountain View, PA</h4>
          <p>Designed, implemented and documented an interactive visualization tool comparing multiple datasets in AngularJS and D3.js. Also improved the frontend filtering method by manipulating D3.js transitions for a visualization tool with 100 daily users.</p>

          <h4>Engineering Practicum Intern | May 2016 - August 2016 | Boulder, CO</h4>
          <p>Implemented backend server in C++ and created a web-based, rotatable display of geospatial data in 3d space using WebGL and Google Maps API.</p>

          <h2>Carnegie Mellon University</h2>
          <h4>Research Assistant | September 2017 - May 2018 | Pittsburgh, PA</h4>
          <h4>Teaching Assistant | May 2015 - May 2018 | Pittsburgh, PA</h4>
          <h4>CRLA Certified Level II: Advanced Tutor | February 2015 - May 2018 | Pittsburgh, PA</h4>
        </div>
      </div>
    );
  }
}

export default Experience;
