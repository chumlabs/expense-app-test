// IMPORTS
// -libraries
import uuid from 'uuid';

// ACTION CREATORS/GENERATORS

// ADD_EXPENSE
// argument(s):
// - object (optional)
// -- description = string (optional)
// -- note = string (optional)
// -- amount = number (optional)
// -- createdAt = moment object (optional)
export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = null
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

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
