import { action } from '@storybook/addon-actions'

import Task from '../Task.vue'

const dummyTask = {
  id: 1,
  text: 'Testy Test',
  checked: false
}

const defaultSettings = {
  components: { Task },
  methods: {
    handleCheckedChange: action('checkedChange'),
    handleTaskDelete: action('taskDelete')
  },
  template: '<task @checkedChange="handleCheckedChange" @taskDelete="handleTaskDelete" :task="task"></task>'
}

export default { title: 'molecules/Task', component: Task }

export const Default = () => ({
  ...defaultSettings,
  data: () => ({ task: dummyTask }),
})

export const Checked = () => ({
  ...defaultSettings,
  data: () => ({ task: { ...dummyTask, checked: true } }),
})