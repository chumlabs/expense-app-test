import moment from 'moment';

// mock expense data
export const earliestDate = moment(1488387600000); // March 1, 2017
export const midDate = moment(1491062400000); // April 1, 2017
export const latestDate = moment(1493654400000); // May 1, 2017
export const now = moment();

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

export default [expenseOne, expenseTwo, expenseThree];
