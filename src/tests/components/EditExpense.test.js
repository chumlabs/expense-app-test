import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenseData';

// test setup
let expense, startEditExpense, history, startRemoveExpense, wrapper;
beforeEach(() => {
  expense = expenses[0];
  startEditExpense = jest.fn();
  history = { push: jest.fn() };
  startRemoveExpense = jest.fn();
  wrapper = shallow(
    <EditExpense
      startEditExpense={startEditExpense}
      history={history}
      startRemoveExpense={startRemoveExpense}
      expense={expense}
    />
  );
});

test('should render EditExpense component properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit handler (startEditExpense) from ExpenseForm', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle onClick handler (startRemoveExpense) from ExpenseForm', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id });
});
