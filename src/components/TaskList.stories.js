import Vue from 'vue';
import TaskList from './TaskList.vue';


const tasks = [
  { id: 1, text: 'blabla', checked: false },
  { id: 2, text: 'blabla', checked: false }
]

const defaultSettings = {
  components: { TaskList },
  template: '<task-list :tasks="tasks"></task-list>'
}

export default { title: 'Task List' };

export const Default = () => ({
  ...defaultSettings,
  data: () => ({ tasks: tasks }),
});

export const NoContent = () => ({
  ...defaultSettings,
  data: () => ({ tasks: [] }),
})