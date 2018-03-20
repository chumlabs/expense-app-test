import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';

export const Login = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__login-box">
      <h1 className="box-layout__login-title">Expensify</h1>
      <p>Better insights into how you use your money</p>
      <button onClick={startLogin} className="button">
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(Login);
