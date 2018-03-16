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

// alt data
const catOne = {
  id: '46',
  description: 'Alibi 54',
  note: 'fantastic bluewater cat with rotating mast and versatile helms',
  amount: 1200000,
  createdAt: midDate.valueOf()
};

const catTwo = {
  id: '47',
  description: 'HH 55',
  note: 'all carbon body and fantastic layout',
  amount: 1500000,
  createdAt: earliestDate.valueOf()
};

const catThree = {
  id: '48',
  description: 'Gunboat 55',
  note: 'the original performance cruising cat',
  amount: 1200000,
  createdAt: latestDate.valueOf()
};

export const catData = [catOne, catTwo, catThree];

export default [expenseOne, expenseTwo, expenseThree];
