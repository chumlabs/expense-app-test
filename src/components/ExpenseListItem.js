// IMPORTS
// - libraries
import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
// - components
// import { removeExpense } from '../actions/expenseActions';

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>

    <ul>
      <li>note: {note}</li>
      <li>amount: {(amount / 100).toFixed(2).toString()}</li>
      <li>created: {moment(createdAt).format('MMM Do, YYYY')}</li>
    </ul>
  </div>
);

export default ExpenseListItem;

// --------------------------
// // alt version - attempt to make purely presentational - no dispatcha action needed
// const ExpenseListItem = ({
//   id,
//   description,
//   note,
//   amount,
//   createdAt,
//   dispatch,
//   onListItemClick
// }) => (
//   <div>
//     <h3>{description}</h3>
//     <ul>
//       <li>note: {note}</li>
//       <li>amount: {amount}</li>
//       <li>created: {createdAt}</li>
//     </ul>
//     <button onClick={onListItemClick(id)}>Remove Expense</button>
//   </div>
// );

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onListItemClick: id => {
//     dispatch(removeExpense({ id }));
//   }
// });

// export default connect(null, mapDispatchToProps)(ExpenseListItem);
