import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses, { now } from '../fixtures/expenseData';
// import { SingleDatePicker } from 'react-dates';

test('should render ExpenseForm (no data)', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form data in ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot(); // snapshot before submit
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot(); // snapshot after submit
});

test('should set decription on description input change in ExpenseForm', () => {
  const value = 'new description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on note input change in ExpenseForm', () => {
  const value = 'new note value';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount on amount input change using valid data', () => {
  const value = '7.04';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on amount input change using invalid data', () => {
  const value = 'invalid data';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  const { description, amount, createdAt, note } = expenses[0];
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  }); // simulate submit event
  expect(wrapper.state('error')).toBe(''); // check error state
  expect(onSubmitSpy).toHaveBeenLastCalledWith({ description, amount, createdAt, note });
});

test('should set new date on date change', () => {
  const wrapper = shallow(<ExpenseForm />);
  // wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now); // using display name
  wrapper.find('[onDateChange]').prop('onDateChange')(now); // using prop selector
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set focused prop when onFocusChange is triggered', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('[onDateChange]').prop('onFocusChange')({ focused }); // using prop selector
  // wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });  // using component (requires import)
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
