import { addExpense, editExpense, removeExpense } from '../../actions/expenseActions';

test('should return an action object to remove an expense', () => {
  const action = removeExpense({
    id: '12367843249234'
  });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12367843249234'
  });
});

test('should return an action object to edit an expense', () => {
  const action = editExpense('1236783935', {
    description: 'edited',
    amount: 700
  });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1236783935',
    updateObj: {
      description: 'edited',
      amount: 700
    }
  });
});

test('should return an action object to create a new expense from supplied values', () => {
  const expenseData = {
    description: 'new expense',
    note: 'expense note',
    amount: 700,
    createdAt: 173000000
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should return an action object to create a new expense without supplied values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: null
    }
  });
});
