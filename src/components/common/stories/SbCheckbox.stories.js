import { action } from '@storybook/addon-actions'

import SbCheckbox from '../SbCheckbox.vue'

export default { title: 'atoms/Checkbox' }

const defaultSettings = {
  components: { SbCheckbox },
  methods: {
    handleInput: action('handleInput')
  },
  template: `<sb-checkbox @input="handleInput" />`
}

export const Default = () => ({
  ...defaultSettings,
})

export const Checked = () => ({
  ...defaultSettings,
  template: `<sb-checkbox @input="handleInput" checked />`
})

export const WithLabel = () => ({
  ...defaultSettings,
  template: `<sb-checkbox @input="handleInput" checked>
    Checkbox with a label
  </sb-checkbox>`
})
