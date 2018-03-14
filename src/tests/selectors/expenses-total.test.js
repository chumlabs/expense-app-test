import selectExpensesTotal from '../../selectors/expenses-total';
import expenseData from '../fixtures/expenseData';

test('should return 0 if no expenses', () => {
  const expenses = [];
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(0);
});

test('should return total for one expense', () => {
  const expenses = [expenseData[0]];
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(expenseData[0].amount);
});

test('should return total for multiple expenses', () => {
  const expenses = expenseData;
  // const total = expenseData[0].amount + expenseData[1].amount + expenseData[2].amount;
  const total = expenseData.reduce((acc, exp) => acc + exp.amount, 0);
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(total);
});
