import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';

export const Login = ({ startLogin }) => (
  <div>
    <h1>Login to Expensify</h1>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(Login);
