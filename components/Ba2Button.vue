<template>
  <button :class="getButtonClass" @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Ba2Button',
  props: {
    click: {
      type: Function,
      default: () => {
        alert('Empty Button')
      },
    },
    text: {
      type: Boolean,
      default: false,
    },
    paddingType: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    getButtonClass() {
      let classes = this.text ? 'text-button' : ''
      if (this.paddingType !== 'default') {
        classes += ` ${this.paddingType}-padding-button`
      }
      return classes
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  user-select: none;
}

.dark-mode {
  button {
    color: $foreground-white;
    background-color: $gray;
    border-width: 0;
    padding: 0.5em 2em;

    &:hover {
      background-color: $focused-gray;
    }

    &.limited-padding-button {
      padding: 4px 8px;
      border-radius: 4px;
    }

    &.none-padding-button {
      padding: 0px 0px;
    }

    &.text-button {
      background-color: transparent;

      &:hover {
        background-color: $gray;
      }
    }
  }
}
</style>
