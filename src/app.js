// IMPORTS
// - libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
// - css
import 'normalize.css/normalize.css';
import './styles/main.scss';
import 'react-dates/lib/css/_datepicker.css';
// - components
import AppRouter, { history } from './routes/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenseActions';
import { login, logout } from './actions/authActions';
import { firebase } from './firebase/firebase';

const store = configureStore();

const mainApp = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(mainApp, appRoot);
    hasRendered = true;
  }
};

const appRoot = document.getElementById('root');
ReactDOM.render(<p>Loading...</p>, appRoot); // loading message

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('logged in');
    console.log(`uid: `, user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('./dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
    console.log('logged out');
  }
});
