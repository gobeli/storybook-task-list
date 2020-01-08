<template>
  <div class="flex items-center border-b border-gray-200 p-4">
    <input type="checkbox" :checked="task.checked" name="done" class="mr-4">
    {{task.text}}
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  }
}
</script>