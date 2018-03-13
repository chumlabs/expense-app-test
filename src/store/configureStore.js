// STATE OBJECT
// IMPORTS
// - libraries
import { createStore, combineReducers } from 'redux';
// - components
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';

export default () => {
  // note: additional preloadedState argument added to use redux devtools extension in browser
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
