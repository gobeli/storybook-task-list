import { action } from '@storybook/addon-actions';

import Task from './Task.vue';

const mockTask = {
  id: 1,
  text: 'Testy Test',
  checked: false
}


const defaultSettings = {
  components: { Task },
  methods: {
    handleCheckedChange: action('checkedChange')
  },
  template: '<task @checkedChange="handleCheckedChange" :task="task"></task>'
}

export default { title: 'Task' };

export const Default = () => ({
  ...defaultSettings,
  data: () => ({ task: mockTask }),
});

export const Checked = () => ({
  ...defaultSettings,
  data: () => ({ task: { ...mockTask, checked: true } }),
});