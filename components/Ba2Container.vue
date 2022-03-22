<template>
  <div class="container"><slot /></div>
</template>

<script>
export default {
  name: 'Ba2Container',
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding: 0 100px;

  @media screen and (max-width: $bp-small) {
    width: 750px;
    padding: 0 50px;
  }
  @media screen and (min-width: $bp-medium) {
    padding: 0 300px;
  }
}
</style>
