// EXPENSES SELECTOR

import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(exp => {
      const createdAtMoment = moment(exp.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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

export default getVisibleExpenses;
