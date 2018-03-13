import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render the Header component correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});









//// if using react-test-renderer/shallow
// const renderer = new ReactShallowRenderer();
// renderer.render(<Header />);
// expect(renderer.getRenderOutput()).toMatchSnapshot();

//// enzyme example
// const wrapper = shallow(<Header />);
// expect(wrapper.find('h1').text()).toBe('Expensify');
