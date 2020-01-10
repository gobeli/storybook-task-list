<template>
  <div class="max-w-3xl px-4 m-auto">
    <task-form @taskAdd="handleTaskAdd" class="my-3" ></task-form>
    <task-list :tasks="tasks"></task-list>
  </div>
</template>

<script>
import TaskList from './components/task/TaskList.vue'
import TaskForm from './components/task/TaskForm.vue'

const id = (function* () {
  let _id = 0;
  while (true) yield ++_id;
})()

export default {
  name: 'app',
  components: {
    TaskForm,
    TaskList
  },
  data: () => ({
    tasks: [],
  }),
  methods: {
    handleTaskAdd(text) {
      this.tasks = [...this.tasks, { id: id.next().value, text, checked :false }]
    }
  }
}
</script>

<style src="./assets/tailwind.css">
