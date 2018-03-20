// IMPORTS
// -libraries
import React from 'react';
import { connect } from 'react-redux';
// - components
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// presentational component
export const ExpenseList = ({ expenses }) => (
  <div className="content-container">
    <div className="list">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {expenses.length !== 0 ? (
          expenses.map(exp => (
            <ExpenseListItem {...exp} key={exp.id} className="list__item" />
          ))
        ) : (
          <div className="list-item list-item--message">
            Create an expense or change the filters to see additional expenses
          </div>
        )}
      </div>
    </div>
  </div>
);

// mapStateToProps func (convention)
const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

// connect funct (HOC component)
// - composes presentational component with state
export default connect(mapStateToProps)(ExpenseList);
