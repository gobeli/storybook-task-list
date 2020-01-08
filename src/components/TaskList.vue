<template>
  <div class="bg-white shadow-md">
    <Task v-for="task in tasks" :key="task.id" :task="task" />
    <div class="flex items-center justify-center h-64" v-if="!tasks || tasks.length <= 0">
      <h2 class="text-xl">No Tasks yet</h2>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  components: {
    Task
  },
  props: {
    tasks: Array,
  }
}
</script>