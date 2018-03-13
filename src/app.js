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

const store = configureStore();

// tests
const billOne = store.dispatch(
  addExpense({
    description: 'duck bill',
    note: 'standard duck bill - Mallard',
    amount: 3495,
    createdAt: 1518886800000
  })
);

const billTwo = store.dispatch(
  addExpense({
    description: 'platypus bill',
    note: 'very rare bill',
    amount: 110000,
    createdAt: 1520010000000
  })
);

const billThree = store.dispatch(
  addExpense({
    description: 'pecker bill',
    note: "that pecker won't be bothering us again",
    amount: 1200,
    createdAt: 1520362972316
  })
);

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

unsubscribe();

const mainApp = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const appRoot = document.getElementById('root');
ReactDOM.render(mainApp, appRoot);
