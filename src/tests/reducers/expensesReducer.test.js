import moment from 'moment';
import expensesReducer from '../../reducers/expensesReducer';
import expenses, { now } from '../fixtures/expenseData'; // MOCK DATA

// TESTS
// initialize
test('should set default state', () => {
  const reduxInitObj = { type: '@@INIT' };
  const state = expensesReducer(undefined, reduxInitObj);
  expect(state).toEqual([]);
});

// ADD_EXPENSE
test('should add a new expense to state', () => {
  const newExpense = {
    id: '4',
    description: 'new expense item',
    note: '',
    amount: 500,
    createdAt: now
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);

  // expect(state).toEqual(expenses.concat(newExpense));
  expect(state).toEqual([...expenses, newExpense]);
});

// REMOVE_EXPENSE
test('should remove a specific expense from state', () => {
  const id = expenses[0].id;
  const action = {
    type: 'REMOVE_EXPENSE',
    id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses.slice(1));
  // expect(state).toEqual([expenses[1], expenses[2]]);   // alternate
});

test('should not remove any expenses if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '777'
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

// EDIT_EXPENSE
test('should edit an existing expense when all props have changed', () => {
  const id = expenses[2].id;
  const updateObj = {
    description: 'edited expense item',
    note: 'edited expense',
    amount: 2000,
    createdAt: now
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updateObj
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses.slice(0, 2).concat({ ...updateObj, id }));
});

test('should edit an existing expense with only one property changed', () => {
  const id = expenses[2].id;
  const amount = 2000;
  const updateObj = {
    amount
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updateObj
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses.slice(0, 2).concat([{ ...expenses[2], amount }]));
});

test('should not edit any expenses if supplied id is not found', () => {
  const updateObj = {
    description: 'edited expense item',
    note: 'edited expense',
    amount: 2000,
    createdAt: now
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '777',
    updateObj
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[0]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0]]);
});
