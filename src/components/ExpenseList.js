// IMPORTS
// -libraries
import React from 'react';
import { connect } from 'react-redux';
// - components
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// presentational component
export const ExpenseList = ({ expenses }) => (
  <div>
    <h1>Expense List</h1>
    {expenses.length !== 0 ? (
      expenses.map(exp => <ExpenseListItem {...exp} key={exp.id} />)
    ) : (
      <p>Create an expense or change the filters to see additional expenses</p>
    )}
  </div>
);

// mapStateToProps func (convention)
const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

// connect funct (HOC component)
// - composes presentational component with state
export default connect(mapStateToProps)(ExpenseList);
