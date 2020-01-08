<template>
  <div class="">
    <Task v-for="task in tasks" :key="task.id" :task="task" />
    <div v-if="!tasks || tasks.length <= 0">
      No Tasks yet
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