import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addExpense,
  startAddExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenseActions';
import db from '../../firebase/firebase';
import expenses, { catData } from '../fixtures/expenseData';

// SETUP
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const expensesData = catData.reduce(
    (exp, { id, description, note, amount, createdAt }) => {
      exp[id] = { description, note, amount, createdAt };
      return exp;
    },
    {}
  );
  db
    .ref('expenses')
    .set(expensesData)
    .then(() => done());
});

// TESTS
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
  const expenseData = expenses[0];

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenseData
  });
});

test('should add expense to database and redux store', done => {
  const store = createMockStore({});
  const { description, amount, note, createdAt } = expenses[1];
  const expenseData = { description, amount, note, createdAt };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions(); // getActions returns array of actions called (redux-mock-store)
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return db.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense to database and redux store using defaults', done => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
      return db.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

test('should setup SET_EXPENSES action object properly', () => {
  const actionObj = setExpenses(expenses);
  expect(actionObj).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from database and pass SET_EXPENSES action obj', done => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses: catData
    });
    done();
  });
});

test('should edit existing expense on db and pass EDIT_EXPENSE action obj', done => {
  const store = createMockStore({});
  const { id, description, note, amount, createdAt } = catData[2];
  const updateObj = { description, note, amount: 70000000, createdAt };
  store
    .dispatch(startEditExpense(id, updateObj))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updateObj
      });
      return db.ref(`expenses/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(updateObj);
      done();
    });
});

test('should remove expense from database and pass EDIT_EXPENSE action obj', done => {
  const store = createMockStore({});
  const id = catData[1].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      // check item is no longer in db
      return db.ref(`expenses/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});
