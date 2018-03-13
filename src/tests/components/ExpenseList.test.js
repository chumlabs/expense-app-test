import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenseData'; // mock data

test('should render the ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList {...expenses[0]} />);

  expect(wrapper).toMatchSnapshot();
});

test('should render the ExpenseList when no there are no expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);

  expect(wrapper).toMatchSnapshot();
});
