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

@font-face {
  font-family: 'Victor Mono';
  font-style: italic;
  font-weight: normal;
  font-display: swap;
  src: url('@/assets/fonts/VictorMono-Italic.ttf') format('truetype');
}

@font-face {
  font-family: 'Victor Mono';
  font-style: italic;
  font-weight: bold;
  font-display: swap;
  src: url('@/assets/fonts/VictorMono-BoldItalic.ttf') format('truetype');
}

@font-face {
  font-family: 'Victor Mono';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url('@/assets/fonts/VictorMono-SemiBoldItalic.ttf') format('truetype');
}

@font-face {
  font-family: 'Victor Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('@/assets/fonts/VictorMono-SemiBold.ttf') format('truetype');
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
}

.dark-mode {
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
  }

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
