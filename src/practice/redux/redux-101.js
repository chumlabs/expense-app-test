// ------------ //
// REDUX BASICS //
// ------------ //

// IMPORTS
// - libraries
import { createStore } from 'redux';


// REDUCERS
// - reducers should be pure functions
// - should not modify arguments
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'SET':
      return {
        count: action.count
      };

    case 'RESET':
      return {
        count: 0
      };

    default:
      return state;
  }
}

// REDUX STORE
// note: additional preloadedState argument added to use redux devtools extension in browser
const store = createStore(countReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// use store.subscribe to get notifcation of state change
// - callback for store.subscribe is the unsubscribe callback (used toward the bottom)
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// ACTION GENERATORS - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// ACTION OBJECTS
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 3
// });
store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

// store.dispatch({
//   type: 'SET',
//   count: 120
// });
store.dispatch(setCount({ count: 120 }));

unsubscribe();
