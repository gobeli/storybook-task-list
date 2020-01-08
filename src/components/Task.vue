<template>
  <div class="bg-white shadow-md flex items-center p-4 m-2">
    <input type="checkbox" name="done" class="mr-4">
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

<style>

</style>