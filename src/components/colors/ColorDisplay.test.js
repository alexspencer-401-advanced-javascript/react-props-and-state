import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay component', () => {
  it('renders ColorDisplay', () => {
    const wrapper = shallow(<ColorDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});
