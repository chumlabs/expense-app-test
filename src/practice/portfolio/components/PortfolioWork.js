// IMPORTS
// - libraries
import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioWork = props => {
  console.log(`PortfolioWork props: `, props);
  return (
    <div>
      <h2>My Work</h2>
      <p>Check out the following projects I've built:</p>
      <ul>
        <li>
          <Link to="projects/2">project 1</Link>
        </li>
        <li>
          <Link to="projects/2">project 2</Link>
        </li>
        <li>
          <Link to="projects/3">project 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioWork;
