// IMPORTS
// - libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
// - components
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filterActions';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = e => {
    // console.log(e.target.value);
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="filter-group">
          <div className="filter-group__item">
            <input
              type="text"
              className="filter-group__text-input"
              value={this.props.filters.text}
              onChange={this.onTextChange}
              placeholder="Enter text to search"
            />
          </div>
          <div className="filter-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
              startDateId={'start'}
              endDateId={'end'}
            />
          </div>
          <div className="filter-group__item">
            Sort By:&nbsp;
            <select
              name="sort"
              id="sort"
              className="filter-group__select-box"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">date</option>
              <option value="amount">amount</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setStartDate: date => dispatch(setStartDate(date)),
  setEndDate: date => dispatch(setEndDate(date)),
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
