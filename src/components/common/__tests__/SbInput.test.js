import { shallowMount } from '@vue/test-utils'

import SbInput from '../SbInput.vue'

describe('SbInput', () => {
  it('should render an input', () => {
    // given
    const vm = shallowMount(SbInput)

    // then
    expect(vm.element).toMatchSnapshot()
  })

  it('should be able to set value', () => {
    // given
    const vm = shallowMount(SbInput)
    const value = 'test';

    // when
    vm.setValue(value)

    // then
    expect(vm.element.value).toEqual(value)
  })
})