// IMPORTS
// - libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// - components
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenseActions';

export class EditExpense extends Component {
  // { dispatch, expense, match, history }
  onSubmit = exp => {
    // console.log('expense updated', exp);
    this.props.startEditExpense(this.props.expense.id, exp);
    this.props.history.push('/dashboard');
  };

  onClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <h2>Expensify - Edit Entry</h2>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
          actionText="Update Expense"
        />
        <button onClick={this.onClick}>Remove Expense</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  expense: state.expenses.find(exp => exp.id === ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  startEditExpense: (id, exp) => dispatch(startEditExpense(id, exp)),
  startRemoveExpense: idObj => dispatch(startRemoveExpense(idObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
