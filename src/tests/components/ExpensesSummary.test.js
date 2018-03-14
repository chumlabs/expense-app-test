import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

/*
props: 
expensesCount
expensesTotalAmount
*/

test('should render ExpensesSummary properly with 0 expenses', () => {
  const expensesCount = 0;
  const expensesTotalAmount = 0;
  const wrapper = shallow(
    <ExpensesSummary
      expensesCount={expensesCount}
      expensesTotalAmount={expensesTotalAmount}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary properly with one expense', () => {
  const expensesCount = 1;
  const expensesTotalAmount = 500;
  const wrapper = shallow(
    <ExpensesSummary
      expensesCount={expensesCount}
      expensesTotalAmount={expensesTotalAmount}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary properly with multiple expenses', () => {
  const expensesCount = 3;
  const expensesTotalAmount = 2525;
  const wrapper = shallow(
    <ExpensesSummary
      expensesCount={expensesCount}
      expensesTotalAmount={expensesTotalAmount}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
