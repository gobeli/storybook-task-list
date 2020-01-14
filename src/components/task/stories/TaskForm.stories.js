import TaskForm from '../TaskForm.vue'

import { action } from '@storybook/addon-actions'

const defaultSettings = {
  components: { TaskForm },
  methods: {
    handleTaskAdd: action('taskAdd'),
  },
  template: '<task-form @taskAdd="handleTaskAdd"></task-form>'
}

export default { title: 'organisms/Task Form' }

export const Default = () => ({
  ...defaultSettings,
})

