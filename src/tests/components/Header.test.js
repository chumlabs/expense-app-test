import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render the Header component correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogoff on button click', () => {
  const startLogoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
  wrapper.find('button').simulate('click');
  expect(startLogoutSpy).toHaveBeenCalled();
});

//// if using react-test-renderer/shallow
// const renderer = new ReactShallowRenderer();
// renderer.render(<Header />);
// expect(renderer.getRenderOutput()).toMatchSnapshot();

//// enzyme example
// const wrapper = shallow(<Header />);
// expect(wrapper.find('h1').text()).toBe('Expensify');
