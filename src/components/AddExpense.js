// IMPORTS
// - libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// - components
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenseActions';

export class AddExpense extends Component {
  onSubmit = expense => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} actionText="Add Expense" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense))
});

export default connect(null, mapDispatchToProps)(AddExpense);
