<template>
  <div class="flex items-center justify-between border-gray-200 p-4"
      :class="{ 'border-4 border-red-300': $showBorders , 'border-b': !$showBorders }"
  >
    <sb-checkbox :checked="task.checked" @input="handleInput" name="done">
      <span :class="{'line-through': task.checked}">
        {{task.text}}
      </span>
    </sb-checkbox>
    <a href="#" @click="handleDelete" class="ml-4">
      &#10006;
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    handleInput(event) {
      this.$emit('checkedChange', event)
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