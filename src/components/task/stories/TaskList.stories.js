import TaskList from '../TaskList.vue'

import { action } from '@storybook/addon-actions'

const tasks = [
  { id: 1, text: 'Task 1', checked: false },
  { id: 2, text: 'A very important task', checked: false }
]

const defaultSettings = {
  components: { TaskList },
  methods: {
    handleTaskUpdate: action('taskUpdate'),
    handleTaskDelete: action('taskDelete')
  },
  template: '<task-list :tasks="tasks" @taskUpdate="handleTaskUpdate" @taskDelete="handleTaskDelete"></task-list>'
}

export default { title: 'organisms/Task List' }

export const Default = () => ({
  ...defaultSettings,
  data: () => ({ tasks }),
})

export const NoContent = () => ({
  ...defaultSettings,
  data: () => ({ tasks: [] }),
})
