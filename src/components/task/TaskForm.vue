<template>
  <form @submit="onSubmit">
    <sb-input v-model="text"></sb-input>
  </form>
</template>

<script>
export default {
  data: () => ({
    text: ''
  }),
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$emit('taskAdd', this.text)
    }
  }
}
</script>

<style>

</style>