// IMPORTS
// - libraries
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="is-active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active">
          Create
        </NavLink>
      </li>
      <li>
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
