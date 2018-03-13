// ------------ //
// REDUX BASICS //
// ------------ //

// IMPORTS
// - libraries
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import { userInfo } from 'os';

// ACTION CREATORS/GENERATORS
// - ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// - REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// - EDIT_EXPENSE
const editExpense = (id, updateObj) => ({
  type: 'EDIT_EXPENSE',
  id,
  updateObj
});

// - SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// - SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// - SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// - SET_START_DATE
const setStartDate = date => ({
  type: 'SET_START_DATE',
  date
});

// - SET_END_DATE
const setEndDate = date => ({
  type: 'SET_END_DATE',
  date
});

// REDUCERS
// - arguments: state (obj) & action (string)

// expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense)
      return [...state, action.expense]; // using spread operator

    case 'REMOVE_EXPENSE':
      // return state.filter(exp => exp.id !== action.id);
      return state.filter(({ id }) => id !== action.id); // using destructuring

    case 'EDIT_EXPENSE':
      return state.map(exp => {
        if (exp.id === action.id) {
          return {
            ...exp,
            ...action.updateObj
          };
        } else {
          return exp;
        }
      });

    default:
      return state;
  }
};

// filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      };

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      };

    default:
      return state;
  }
};

// STATE OBJECT
// - calls combineReducer() to combine reducers above
// note: additional preloadedState argument added to use redux devtools extension in browser
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // state data structure
// const exampleState = {
//   expenses: [
//     {
//       id: '398hwfn89c3',
//       description: 'rafting',
//       note: 'whitewater rafting trip in CO',
//       amount: 11000,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: 'rafting',
//     sortBy: 'amount',
//     startDate: undefined,
//     endDate: undefined
//   }
// };

//
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(exp => {
      const startDateMatch = typeof startDate !== 'number' || exp.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || exp.createdAt <= startDate;
      const textMatch =
        !exp.description || exp.description.toLowerCase().includes(text.toLowerCase());
      // could also use .match(regexp)

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// TESTING - using dispatch()

// testing expense reducer
const expenseOne = store.dispatch(
  addExpense({
    description: 'new pet',
    note: 'new pet monkey',
    amount: 5000,
    createdAt: -1000
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: 'repellent',
    note: 'monkey repellent',
    amount: 1200,
    createdAt: 0
  })
);

const expenseThree = store.dispatch(
  addExpense({
    description: 'fix monkey situation',
    note: 'relocate monkey back to natural habitat',
    amount: 120000,
    createdAt: 500
  })
);

// subscribe to state changes
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// // test if no id is included
// store.dispatch(removeExpense());

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 2400 }));

// // testing filter reducer
// store.dispatch(setTextFilter('monkey'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(250));
