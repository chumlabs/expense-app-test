// IMPORTS
// - libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// - components
import { startLogin, startLogout } from '../actions/authActions';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <h1 className="header__title">
          <Link to="/dashboard">Expensify</Link>
        </h1>

        <button onClick={startLogout} className="button button--no-bg">
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});
export default connect(null, mapDispatchToProps)(Header);
