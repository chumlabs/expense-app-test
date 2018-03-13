import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../../components/Navigation';

test('should render the Navigation component correctly', () => {
  const wrapper = shallow(<Navigation />);
  expect(wrapper).toMatchSnapshot();
});
