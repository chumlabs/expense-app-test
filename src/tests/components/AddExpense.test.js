import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenseData'; // mock data

// test setup
let startAddExpense, history, wrapper;
beforeEach(() => {
  startAddExpense = jest.fn(); // mock func for startAddExpense
  history = { push: jest.fn() }; // mock func for history prop
  wrapper = shallow(<AddExpense startAddExpense={startAddExpense} history={history} />);
}); // used by following tests

// tests
test('should render AddExpense properly', () => {
  expect(wrapper).toMatchSnapshot(); // snapshot
});

test('should handle onSubmit handler properly from ExpenseForm component', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
});
