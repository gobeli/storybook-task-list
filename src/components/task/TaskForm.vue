<template>
  <form @submit="onSubmit" :class="{ 'border-4 border-red-300': $showBorders }">
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
      this.text = ''
    }
  }
}
</script>