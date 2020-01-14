import { action } from '@storybook/addon-actions'

import SbInput from '../SbInput.vue'

export default { title: 'atoms/Input' }

const defaultSettings = {
  components: { SbInput },
  methods: {
    handleInput: action('handleInput')
  },
  template: `<sb-input @input="handleInput" />`
}

export const Default = () => ({
  ...defaultSettings,
})

export const WithPlaceholder = () => ({
  ...defaultSettings,
  template: `<sb-input @input="handleInput" placeholder="A Placeholder" />`
})

export const Readonly = () => ({
  ...defaultSettings,
  template: `<sb-input @input="handleInput" readonly />`
})