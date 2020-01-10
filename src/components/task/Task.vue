<template>
  <div class="flex items-center border-b border-gray-200 p-4" :class="{'line-through': task.checked}">
    <input type="checkbox" :checked="task.checked" @change="handleChange" name="done" class="mr-4">
    {{task.text}}
  </div>
</template>

<script>
export default {
  methods: {
    handleChange(event) {
      this.$emit('checkedChange', event.target.checked);
    }
  },
  props: {
    task: Object
  }
}
</script>