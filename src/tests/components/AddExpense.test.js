import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenseData'; // mock data

// test setup
let addExpense, history, wrapper;
beforeEach(() => {
  addExpense = jest.fn(); // mock func for addExpense
  history = { push: jest.fn() }; // mock func for history prop
  wrapper = shallow(<AddExpense addExpense={addExpense} history={history} />);
}); // used by following tests

// tests
test('should render AddExpense properly', () => {
  expect(wrapper).toMatchSnapshot(); // snapshot
});

test('should handle onSubmit handler properly from ExpenseForm component', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
});
