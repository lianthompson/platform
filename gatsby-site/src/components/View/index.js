import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import './View.css';
import Illustration from './Background/Illustration.js';
import ReactNavbar from '../Navbar/index.js';

const View = (props) => {
  return (
    <div>
      <Illustration />
      <ReactNavbar />
      <Jumbotron>
        <div id="title">
          <h1 className="display-3">Building <br></br> better software, together.</h1>
        </div>
        <p className="lead">Teams that consistently perform at the highest levels are able to come together and be unified across the organization - staff, players, coaches, management, and ownership. When everyone is on the same page, trust develops and teams can grow and succeed together.</p>
        <div className="project-container">
          <div className="project">
          <img src='http://res.cloudinary.com/colark/image/upload/r_11/v1534365918/Colark%20Marketing%20Site/PhaseZero.png'/>
          </div>
          <div className="project">
          <img src='http://res.cloudinary.com/colark/image/upload/r_10/v1534365717/Colark%20Marketing%20Site/Unstack.png'/>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default View;