import React from 'react';
import { shallow } from 'enzyme';

import Cell from '.';

describe('<Cell />', () => {
  it('should mount with props true', () => {
    const wrapper = shallow(<Cell />);
    expect(wrapper.find('.cell-image').length).toEqual(1);
  });
});
