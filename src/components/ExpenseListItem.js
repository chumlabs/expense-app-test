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
    <Link to={`/edit/${id}`} className="list-item">
      <div>
        <h3 className="list-item__title">{description} </h3>
        <span className="list-item__subtitle">
          {moment(createdAt).format('MMM Do, YYYY')}
        </span>
      </div>
      <div>
        <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
      </div>
    </Link>
  </div>
);

export default ExpenseListItem;
