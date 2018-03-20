// IMPORTS
// - libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// - components
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenseActions';

export class AddExpense extends Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} actionText="Save Expense" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(null, mapDispatchToProps)(AddExpense);
