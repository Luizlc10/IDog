import React from 'react';
import { shallow } from 'enzyme';

import Menu from '.';

describe('<Menu />', () => {
  it('should render dog list with 4 items', () => {
    const wrapper = shallow(<Menu />)
    expect(wrapper.find('ul').children()).toHaveLength(4)
  });
});
