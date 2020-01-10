<template>
  <input 
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
    :name="name" :type="type" :placeholder="placeholder" :readonly="readonly"
    @input="handleInput"
  >
</template>

<script>
export default {
  name: 'SbInput',
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
  },
  props: {
    name: String,
    type: {
      type: String,
      default: 'text'
    },
    value: String,
    placeholder: String,
    readonly: Boolean
  }
}
</script>
