<template>
  <label class="custom-label flex items-center">
    <div class="bg-white border w-5 h-5 p-1 flex justify-center items-center">
      <input type="checkbox" class="hidden" @input="handleInput"
        :name="name"
        :checked="checked">
      <svg class="text-blue-600 w-5 h-5 hidden pointer-events-none" viewBox="0 0 172 172">
        <g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal">
          <path d="M0 172V0h172v172z"/>
          <path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/>
        </g>
      </svg>
    </div>
    <span class="select-none ml-2">
      <slot></slot>
    </span>
  </label>
</template>

<script>
// https://tailwindcomponents.com/component/checkbox

export default {
  name: 'SbCheckbox',
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.checked)
    }
  },
  props: {
    name: String,
    checked: Boolean
  }
}
</script>

<style>
.custom-label input:checked + svg {
    display: block !important;
}
</style>