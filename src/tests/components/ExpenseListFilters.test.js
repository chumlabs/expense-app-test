import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters.js';
import { defaultFilters, uniqueFilters } from '../fixtures/filterData'; // mock filters data

/* ExpenseListFilter props:
  filters
  setStartDate
  setEndDate
  setTextFilter
  sortByDate
  sortByAmount
*/

// test setup
let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={defaultFilters}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
    />
  );
});

// tests
test('should render ExpenseListFilters component properly (with default filters)', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters component properly (with unique filters)', () => {
  wrapper.setProps({ filters: uniqueFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text filter change', () => {
  const value = 'more';
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({ filters: uniqueFilters }); // to set text filter to non-default value
  wrapper.find('select').simulate('change', { target: { value } });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', { target: { value } });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle start & end date change', () => {
  const startDate = moment(0).add(2, 'years');
  const endDate = moment(0).add(25, 'years');
  wrapper.find('[onDatesChange]').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
  const calendarFocused = 'startDate';
  wrapper.find('[onFocusChange]').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
