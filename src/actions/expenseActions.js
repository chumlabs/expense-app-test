// IMPORTS
// -libraries
import db from '../firebase/firebase';

// ACTION CREATORS/GENERATORS

// ADD_EXPENSE
// argument(s):
// - object (optional)
// -- description = string (optional)
// -- note = string (optional)
// -- amount = number (optional)
// -- createdAt = moment object (optional)
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    // prettier-ignore
    const { 
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return db
      .ref('expenses')
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// REMOVE_EXPENSE
// argument(s):
// - object with id (required)
// -- id = string (required)
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
// argument(s):
// - id = string (required)
// - object
// -- description = string (optional)
// -- note = string (optional)
// -- amount = number (optional)
// -- createdAt = moment object (optional)
export const editExpense = (id, updateObj) => ({
  type: 'EDIT_EXPENSE',
  id,
  updateObj
});
