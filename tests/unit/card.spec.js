import { shallowMount } from '@vue/test-utils'
import Card from '../../src/components/Card.vue'

describe('Card.vue', () => {
  it('renders slot.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Card, {
      slots: {
        default: msg
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

/*
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

*/
