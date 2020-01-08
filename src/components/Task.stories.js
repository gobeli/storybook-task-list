import Vue from 'vue';
import Task from './Task.vue';

const mockTask = {
  id: 1,
  text: 'Testy Test',
  checked: false
}

const defaultSettings = {
  components: { Task },
  template: '<task :task="task"></task>'
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