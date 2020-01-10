<template>
  <div class="bg-white rounded shadow">
    <Task v-for="task in tasks" 
      @checkedChange="handleCheckedChange(task, $event)" @taskDelete="handleTaskDelete" 
      :key="task.id" :task="task" 
    />
    <div class="flex items-center justify-center" v-if="!tasks || tasks.length <= 0">
      <h2 class="text-xl my-12">No tasks yet</h2>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  components: {
    Task
  },
  methods: {
    handleCheckedChange(task, checked) {
      this.$emit('taskUpdate', { ...task, checked })
    },
    handleTaskDelete(event) {
      this.$emit('taskDelete', event)
    }
  },
  props: {
    tasks: Array,
  }
}
</script>