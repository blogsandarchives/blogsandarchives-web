<template>
  <div :style="getComputedStyle"><slot /></div>
</template>

<script>
export default {
  name: 'Ba2Center',
  props: {
    fullHeight: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    getComputedStyle() {
      return {
        height: this.fullHeight ? '100%' : '',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  display: grid;
  place-items: center;
  height: 100%;
}
</style>
