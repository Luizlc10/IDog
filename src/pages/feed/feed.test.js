import React from 'react'
import { shallow } from 'enzyme'

import Feed from '.'

describe('<Feed />', () => {
  it('should render <Menu />t', () => {
    const wrapper = shallow(<Feed />)
    expect(wrapper.find('Menu')).toHaveLength(1)
  })

  it('should render email <Galery />', () => {
    const wrapper = shallow(<Feed />)
    expect(wrapper.find('Galery')).toHaveLength(1)
  })
})
