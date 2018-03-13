import moment from 'moment';
import filtersReducer from '../../reducers/filtersReducer';

test('should initialize filters with default values', () => {
  const reduxInitObj = { type: '@@INIT' };
  const state = filtersReducer(undefined, reduxInitObj);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy filter to "amount"', () => {
  const action = { type: 'SORT_BY_AMOUNT' };
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy filter to "date"', () => {
  // sortBy is set to 'date' by default. prevState used to simulate non-default state.
  const prevState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(prevState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'filter text';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set the startDate filter', () => {
  const newStartDate = moment();
  const action = {
    type: 'SET_START_DATE',
    date: newStartDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(newStartDate);
});

test('should set the endDate filter', () => {
  const newEndDate = moment();
  const action = {
    type: 'SET_END_DATE',
    date: newEndDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(newEndDate);
});
