<template>
  <span>
    <span class="symbol">:\\</span><span class="text">blogsandarchives</span
    ><span class="symbol">\</span><span class="text">{{ name }}</span>
  </span>
</template>

<script>
export default {
  name: 'Ba2Title',
  props: {
    name: {
      type: String,
      default: 'null',
    },
  },
}
</script>

<style lang="scss" scoped>
span {
  font-size: $typography-title;

  &.symbol {
    color: $foreground-gray;
  }
}
</style>
