import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenseData';

// test setup
let expense, editExpense, history, removeExpense, wrapper;
beforeEach(() => {
  expense = expenses[0];
  editExpense = jest.fn();
  history = { push: jest.fn() };
  removeExpense = jest.fn();
  wrapper = shallow(
    <EditExpense
      editExpense={editExpense}
      history={history}
      removeExpense={removeExpense}
      expense={expense}
    />
  );
});

test('should render EditExpense component properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit handler from ExpenseForm', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle onClick handler', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
});
