<template>
  <div class="flex items-center border-b border-gray-200 p-4">
    <input type="checkbox" :checked="task.checked" @change="handleChange" name="done" class="mr-4">
    <div class="flex-1" :class="{'line-through': task.checked}">
      {{task.text}}
    </div>
    <a href="#" @click="handleDelete" class="ml-4">
      &#10006;
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange(event) {
      this.$emit('checkedChange', event.target.checked)
    },
    handleDelete(event) {
      event.preventDefault()
      this.$emit('taskDelete', this.task)
    }
  },
  props: {
    task: Object
  }
}
</script>