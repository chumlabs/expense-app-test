import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

// mock data
const earliestDate = moment(1488387600000); // April 1, 2017
const midDate = moment(1491062400000); // March 1, 2017
const latestDate = moment(1493654400000); // May 1, 2017

const expenseOne = {
  id: '1',
  description: 'item 1 - abc',
  note: 'lowest amount, middle date',
  amount: 700,
  createdAt: midDate.valueOf()
};

const expenseTwo = {
  id: '2',
  description: 'item 2 - bcd',
  note: 'highest amount, earliest date',
  amount: 2000,
  createdAt: earliestDate.valueOf()
};

const expenseThree = {
  id: '3',
  description: 'item 3 - cdf',
  note: 'middle amount,  latest date',
  amount: 1100,
  createdAt: latestDate.valueOf()
};

const expenses = [expenseOne, expenseTwo, expenseThree];

// tests
test('should sort expenses by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const sortResult = selectExpenses(expenses, filters);
  expect(sortResult).toEqual([expenseTwo, expenseThree, expenseOne]);
});

test('should sort expenses by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const sortResult = selectExpenses(expenses, filters);
  expect(sortResult).toEqual([expenseThree, expenseOne, expenseTwo]);
});

test('should filter by text value and sort expenses by date', () => {
  const filters = {
    text: 'd',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const filterResult = selectExpenses(expenses, filters);

  expect(filterResult).toEqual([expenseThree, expenseTwo]);
});

test('should filter by start date and sort expenses by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: midDate,
    endDate: undefined
  };
  const filterResult = selectExpenses(expenses, filters);

  expect(filterResult).toEqual([expenseThree, expenseOne]);
});

test('should filter by end date and sort expenses by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: midDate
  };
  const filterResult = selectExpenses(expenses, filters);

  expect(filterResult).toEqual([expenseOne, expenseTwo]);
});

test('should filter by start and end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: midDate.subtract(7, 'days'),
    endDate: midDate.add(7, 'days')
  };
  const filterResult = selectExpenses(expenses, filters);

  expect(filterResult).toEqual([expenseOne]);
});
