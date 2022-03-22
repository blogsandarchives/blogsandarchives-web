<template>
  <div :class="getListClasses" class="list-container"><slot /></div>
</template>

<script>
export default {
  name: 'Ba2List',
  props: {
    crossAxisAllignment: {
      type: String,
      default: 'center',
    },
    mainAxisAllignment: {
      type: String,
      default: 'start',
    },
    direction: {
      type: String,
      default: 'column',
    },
  },
  computed: {
    getListClasses() {
      return `caa-${this.crossAxisAllignment} maa-${this.mainAxisAllignment} dir-${this.direction}`
    },
  },
}
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;

  &.caa-center {
    align-items: center;
  }

  &.caa-start {
    align-items: start;
  }

  &.caa-end {
    align-items: end;
  }

  &.caa-stretch {
    align-items: stretch;
  }

  &.maa-center {
    justify-content: center;
  }

  &.maa-start {
    justify-content: flex-start;
  }

  &.maa-end {
    justify-content: flex-end;
  }

  &.maa-space-evenly {
    justify-content: space-evenly;
  }

  &.maa-space-around {
    justify-content: space-around;
  }

  &.maa-space-between {
    justify-content: space-between;
  }

  &.dir-column {
    flex-direction: column;
  }

  &.dir-row {
    flex-direction: row;
  }

  &.dir-column-reversed {
    flex-direction: column-reverse;
  }

  &.dir-row-reverse {
    flex-direction: row-reverse;
  }
}
</style>
