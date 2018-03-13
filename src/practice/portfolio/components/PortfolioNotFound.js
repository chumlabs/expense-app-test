// IMPORTS
// - libraries
import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioNotFound = () => (
  <div>
    <h3>hmmm...</h3>
    <p>this is not the page you are looking for.</p>
    <p>
      why don't you go <Link to="/">home</Link> instead.
    </p>
  </div>
);

export default PortfolioNotFound;
