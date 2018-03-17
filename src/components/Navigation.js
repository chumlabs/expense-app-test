// IMPORTS
// - libraries
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/dashboard" activeClassName="is-active">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active">
          Add Expense
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
