import Vue from 'vue'
import SbInput from '../SbInput.vue'

describe('SbInput', () => {
  let component, vm;

  beforEach(() => {
    component = Vue.extend(SbInput)
    vm = new component().$mount()
  })

  it('should render an input', () => {
    expect(vm.$el).toMatchSnapshot()
  })
})