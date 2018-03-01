import App from '../../src/main-page'
import {mount} from 'enzyme'
import {expect} from 'chai'

describe('first test', () => {
  it('render test', () => {
    const wrapper = mount(<App />)
    expect(wrapper.text()).to.not.eql('')
    expect(wrapper.text()).to.not.eql(null)
  })
})