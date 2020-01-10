import TaskList from '../TaskList.vue'

import { action } from '@storybook/addon-actions'

const tasks = [
  { id: 1, text: 'blabla', checked: false },
  { id: 2, text: 'blabla', checked: false }
]

const defaultSettings = {
  components: { TaskList },
  methods: {
    handleTaskUpdate: action('taskUpdate'),
    handleTaskDelete: action('taskDelete')
  },
  template: '<task-list :tasks="tasks" @taskUpdate="handleTaskUpdate" @taskDelete="handleTaskDelete"></task-list>'
}

export default { title: 'Task List' }

export const Default = () => ({
  ...defaultSettings,
  data: () => ({ tasks: tasks }),
})

export const NoContent = () => ({
  ...defaultSettings,
  data: () => ({ tasks: [] }),
})
