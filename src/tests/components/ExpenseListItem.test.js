import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenseData'; // mock data

test('should render ExpenseListItem component with expense data', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);

  expect(wrapper).toMatchSnapshot();
});
