// IMPORTS
// - libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// - css
import 'normalize.css/normalize.css';
import './styles/main.scss';
import 'react-dates/lib/css/_datepicker.css';
// - components
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenseActions';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';

const store = configureStore();

const mainApp = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const appRoot = document.getElementById('root');
ReactDOM.render(mainApp, appRoot);
