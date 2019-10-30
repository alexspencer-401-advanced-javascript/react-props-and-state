import React from 'react';
import { shallow } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('ColorContainer component', () => {
  it('renders ColorContainer', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
