// EXPENSES REDUCER

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

    case 'SET_EXPENSES':
      return action.expenses;

    default:
      return state;
  }
};

export default expensesReducer;
