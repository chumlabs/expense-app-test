// IMPORTS
// - libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// - components
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenseActions';

export class EditExpense extends Component {
  // { dispatch, expense, match, history }
  onSubmit = exp => {
    // console.log('expense updated', exp);
    this.props.editExpense(this.props.expense.id, exp);
    this.props.history.push('/');
  };

  onClick = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
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
  editExpense: (id, exp) => dispatch(editExpense(id, exp)),
  removeExpense: idObj => dispatch(removeExpense(idObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
