import React from 'react';
import { shallow } from 'enzyme';

import Galery from '.';

describe('<Galery />', () => {
  it('should mount with props true', () => {
    let _list = ['a', 'b', 'c'];
    const wrapper = shallow(<Galery list={_list} />);
    expect(wrapper.find('li').length).toBeGreaterThan(0);
  });

  it('should mount with props false', () => {
    let _list = [];
    const wrapper = shallow(<Galery list={_list} />);
    expect(wrapper.find('li').length).toEqual(0);
  });

});
