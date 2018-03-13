// IMPORTS
// - libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <p>We can't find the page you are looking for</p>
    <p>
      Head back to <Link to="/">the home page</Link>
    </p>
  </div>
);

export default NotFound;
