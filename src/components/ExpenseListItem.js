// IMPORTS
// - libraries
import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
// - components
// import { removeExpense } from '../actions/expenseActions';

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>

    <ul>
      <li>note: {note}</li>
      <li>amount: {numeral(amount / 100).format('$0,0.00')}</li>
      <li>created: {moment(createdAt).format('MMM Do, YYYY')}</li>
    </ul>
  </div>
);

export default ExpenseListItem;
