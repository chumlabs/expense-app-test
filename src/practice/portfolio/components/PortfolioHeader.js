// IMPORTS
// - libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioHeader = () => (
  <header>
    <h1>Portfolio</h1>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="is-active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="is-active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="is-active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default PortfolioHeader;
