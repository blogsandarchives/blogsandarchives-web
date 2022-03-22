<template>
  <div></div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Victor Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('@/assets/fonts/VictorMono-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Victor Mono';
  font-style: normal;
  font-weight: bold;
  font-display: swap;
  src: url('@/assets/fonts/VictorMono-Bold.ttf') format('truetype');
}

body {
  margin: 0;
  padding: 0;
}

.dark-mode {
  * {
    font-family: 'Victor Mono', monospace;
    color: $foreground-white;
    font-weight: bold;
    font-size: $typography-content;
  }

  body {
    background-color: $background-gray;
  }
}
</style>
