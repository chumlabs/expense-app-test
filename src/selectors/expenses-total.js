// expenses-total selector

const selectExpensesTotal = expenses =>
  expenses && expenses.length !== 0
    ? expenses.reduce((acc, exp) => acc + exp.amount, 0)
    : 0;

export default selectExpensesTotal;

// conditional above is not likely needed, but in there just in case
