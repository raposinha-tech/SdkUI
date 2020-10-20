import { createLocalVue, shallowMount } from '@vue/test-utils'
import Alert from '@/components/Alert.vue'
import SdkUI from '../../index'

const localVue = createLocalVue()
localVue.use(SdkUI)
describe('Alert.vue', () => {
  it('alert renders type success', () => {
    const type = 'success'
    const typeMessage = 'alert success'
    const color = 'text-green-500'
    const wrapper = shallowMount(Alert, {
      localVue,
      propsData: {
        type,
        title: typeMessage
      }
    })
    expect(wrapper.html()).toMatch(color)
    expect(wrapper.html()).toMatch(typeMessage)
  })
  it('alert renders type warning', () => {
    const type = 'warning'
    const typeMessage = 'alert warning'
    const color = 'text-yellow-500'
    const wrapper = shallowMount(Alert, {
      localVue,
      propsData: {
        type,
        title: typeMessage
      }
    })
    expect(wrapper.html()).toMatch(color)
    expect(wrapper.html()).toMatch(typeMessage)
  })
  it('alert renders type info', () => {
    const type = 'info'
    const typeMessage = 'alert info'
    const color = 'text-blue-500'
    const wrapper = shallowMount(Alert, {
      localVue,
      propsData: {
        type,
        title: typeMessage
      }
    })
    expect(wrapper.html()).toMatch(color)
    expect(wrapper.html()).toMatch(typeMessage)
  })
  it('alert renders type danger', () => {
    const type = 'danger'
    const typeMessage = 'alert danger'
    const color = 'text-red-500'
    const wrapper = shallowMount(Alert, {
      localVue,
      propsData: {
        type,
        title: typeMessage
      }
    })
    expect(wrapper.html()).toMatch(color)
    expect(wrapper.html()).toMatch(typeMessage)
  })
})
