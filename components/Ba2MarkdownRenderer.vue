<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="markdown-result" v-html="getParsedMarkdown" />
  <!-- eslint-enable -->
</template>

<script>
import { marked } from 'marked'

export default {
  name: 'Ba2MarkdownRenderer',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  computed: {
    getParsedMarkdown() {
      const linebreakedContent = this.content.replaceAll('\n', '  \n')
      return marked(linebreakedContent, { sanitize: true })
    },
  },
}
</script>

<style lang="scss">
.dark-mode {
  .markdown-result {
    p,
    em,
    del,
    ol,
    ul,
    li,
    a {
      font-weight: normal;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 18px 0;
    }
    h1 {
      font-size: $markdown-h1;
    }
    h2 {
      font-size: $markdown-h2;
    }
    h3 {
      font-size: $markdown-h3;
    }
    h4 {
      font-size: $markdown-h4;
    }
    h5 {
      font-size: $markdown-h5;
    }
    h6 {
      font-size: $markdown-h6;
    }

    p > code,
    pre {
      border: 1px solid $foreground-gray;
      font-weight: 600;
      background-color: $gray;
    }
    p > code {
      padding: 1px 5px;
    }
    pre {
      padding: 5px;
    }
    a {
      color: $link-accent;
      text-decoration: none;
      padding: 1px 5px;
      border-radius: 2px;

      &:hover {
        background-color: $link-accent-dark;
      }
    }

    table,
    td,
    tr,
    th {
      border: $foreground-gray 1px solid;
    }

    td,
    th {
      padding: 8px;
    }

    table {
      border-collapse: collapse;
    }

    hr {
      height: 0px;
      background-color: transparent;
      border-bottom: none;
      border-left: none;
      border-right: none;
      border-top: $foreground-gray 4px solid;
    }

    blockquote {
      margin: 5px 0px;
      border-left: 4px solid $foreground-gray;
      padding: 5px 0px 5px 15px;

      p {
        margin: 0;
      }
    }
  }
}
</style>
