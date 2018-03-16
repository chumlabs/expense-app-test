import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter
} from '../../actions/filterActions';

test('should return action object to set the filter start date', () => {
  const timeStamp = moment();
  const startAction = setStartDate(timeStamp);

  expect(startAction).toEqual({
    type: 'SET_START_DATE',
    date: timeStamp
  });
});

test('should return action object to set the filter end date', () => {
  const timeStamp = moment();
  const endAction = setEndDate(timeStamp);

  expect(endAction).toEqual({
    type: 'SET_END_DATE',
    date: timeStamp
  });
});

test('should return action object to sort by amount', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should return action object to sort by date', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should return an action object to set a text search string using supplied text', () => {
  const filterText = 'SearchText';
  const action = setTextFilter(filterText);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: filterText
  });
});

test('should return an action object to set a text search string without supplied text', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});
