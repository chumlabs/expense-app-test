// IMPORTS
// -libraries
import React from 'react';
import { connect } from 'react-redux';
// - components
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
// import { removeExpense } from '../actions/expenseActions';

// presentational component
export const ExpenseList = ({ expenses }) => (
  <div>
    <h1>Expense List</h1>
    <p>You have {expenses ? expenses.length : 0} expenses</p>
    {expenses ? (
      expenses.map(exp => <ExpenseListItem {...exp} key={exp.id} />)
    ) : (
      <p>Create an expense or clear the date range filter to see additional expenses</p>
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

// --------------------------
// // alt version - attempting to used mapDispatchToProps to pass onClick as prop
// const ExpenseList = ({ expenses, onListItemClick }) => (
//   <div>
//     <h1>Expense List</h1>
//     {expenses.map(exp => (
//       <ExpenseListItem {...exp} key={exp.id} onClick={onListItemClick} />
//     ))}
//     {console.log(onListItemClick)}
//   </div>
// );

// const mapStateToProps = state => ({
//   expenses: selectExpenses(state.expenses, state.filters)
// });

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onListItemClick: (dispatch) => dispatch(removeExpense(ownProps.id))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
