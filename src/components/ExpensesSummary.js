import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotalAmount }) => {
  const expenseTense = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedAmount = numeral(expensesTotalAmount / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Summary</h1>
        <p className="page-header__summary">
          Showing <span>{expensesCount}</span> {expenseTense} totalling{' '}
          <span>{formattedAmount}</span>
        </p>
        <div className="page-header__actions">
          <Link to="/create" className="button">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const filteredExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount: filteredExpenses.length,
    expensesTotalAmount: selectExpensesTotal(filteredExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
