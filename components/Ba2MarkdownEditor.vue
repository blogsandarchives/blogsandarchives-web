<template>
  <ba2-list
    class="main-container"
    direction="row"
    cross-axis-allignment="stratch"
  >
    <textarea
      v-model="contentData"
      class="editarea"
      @change="onContentChange"
    />
    <ba2-markdown-renderer class="renderer" :content="contentData" />
  </ba2-list>
</template>

<script>
import Ba2List from './Ba2List.vue'
import Ba2MarkdownRenderer from './Ba2MarkdownRenderer.vue'
export default {
  name: 'Ba2MarkdownEditor',
  components: { Ba2List, Ba2MarkdownRenderer },
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  data() {
    return { contentData: '' }
  },
  mounted() {
    this.contentData = this.content
  },
  methods: {
    onContentChange(e) {
      this.$emit('contentChange', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.dark-mode {
  .main-container {
    min-height: 50vh;
  }

  .renderer {
    background-color: $gray;
    width: 50%;
    padding: 10px;
  }
  .editarea {
    background-color: transparent;
    border: 2px $gray solid;
    padding: 10px;
    resize: none;
    width: calc(50% - 4px);
    outline: none;
  }
}
</style>
