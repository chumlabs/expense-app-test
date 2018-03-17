// IMPORTS
// - libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// - components
import Navigation from './Navigation';
import { startLogin, startLogout } from '../actions/authActions';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <Navigation />
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});
export default connect(null, mapDispatchToProps)(Header);
