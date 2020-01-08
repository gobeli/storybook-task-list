<template>
  <div class="max-w-3xl m-auto">
    <task-list :tasks="tasks"></task-list>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';

export default {
  name: 'app',
  data: () => ({
    tasks: [{ id: 1, text: 'blabla' }, { id: 2, text: 'blabla' }]
  }),
  components: {
    TaskList
  }
}
</script>

<style src="./assets/tailwind.css">
