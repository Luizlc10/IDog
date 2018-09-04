import React from 'react';
import { shallow } from 'enzyme';

import Login from '.';

describe('<Login />', () => {

  it('should render email input', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('#login-email')).toHaveLength(1);
  })

  it('should render email input', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('#login-submit')).toHaveLength(1);
  })

})
