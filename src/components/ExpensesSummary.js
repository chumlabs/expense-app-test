import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotalAmount }) => {
  const expenseTense = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedAmount = numeral(expensesTotalAmount / 100).format('$0,0.00');

  return (
    <div>
      <p>{`Showing ${expensesCount} ${expenseTense} totalling ${formattedAmount}`}</p>
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
