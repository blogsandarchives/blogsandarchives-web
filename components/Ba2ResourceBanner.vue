<template>
  <ba2-list
    class="banner-container"
    direction="row"
    cross-axis-allignment="stretch"
    main-axis-allignment="start"
    :class="getBannerClasses"
  >
    <div class="resource-meta">
      <ba2-list class="meta-container" cross-axis-allignment="start">
        <div class="resource-type">
          {{ edit ? '>>> ' + $t('editing') : $t(type) }}
        </div>
        <ba2-list
          main-axis-allignment="center"
          cross-axis-allignment="start"
          class="tag-container"
        >
          <div v-if="!edit" class="resource-tag">
            {{ $t('tag') }}: {{ tag }}
          </div>
          <div v-if="!edit" class="resource-tag">
            {{ $t('postDate') }}: {{ getPostDate }}
          </div>
          <div v-if="!edit" class="resource-tag">
            {{ $t('postTime') }}: {{ getPostTime }}
          </div>
          <div v-if="!edit" class="resource-tag">
            {{ $t('ref') }}: {{ refCode }}
          </div>
        </ba2-list>
        <div class="resource-actions">
          <ba2-list direction="row" main-axis-allignment="center">
            <ba2-list
              v-for="action in metaActions"
              :key="action.id"
              direction="row"
              class="action-group"
            >
              <span class="action-button" @click="action.click">{{
                $t(action.name)
              }}</span>
              <span v-if="action.id !== metaActions.length - 1">|</span>
            </ba2-list>
          </ba2-list>
        </div>
      </ba2-list>
    </div>
    <div v-if="submeta" class="resource-meta submeta">
      <ba2-list class="meta-container" cross-axis-allignment="start">
        <div class="resource-type">{{ $t('assetsMeta') }}</div>
        <ba2-list
          v-if="showAdvanced"
          main-axis-allignment="center"
          cross-axis-allignment="start"
          class="tag-container"
        >
          <div class="resource-tag">{{ $t('filetype') }}: {{ filetype }}</div>
          <div class="resource-tag">{{ $t('filesize') }}: {{ filesize }}</div>
          <div class="resource-tag">{{ $t('ip') }}: {{ ip }}</div>
          <ba2-list direction="row" main-axis-allignment="start">
            <div class="resource-tag">{{ $t('sha256') }}:</div>
            <span class="resource-tag action-button" @click="copyFileHash">{{
              $t('copy')
            }}</span>
          </ba2-list>
        </ba2-list>
        <ba2-list
          v-else
          main-axis-allignment="center"
          cross-axis-allignment="start"
          class="tag-container"
        >
          <div class="resource-tag">{{ $t('location') }}: {{ filetype }}</div>
          <div class="resource-tag">
            {{ $t('uploadDate') }}: {{ getUploadDate }}
          </div>
          <div class="resource-tag">
            {{ $t('uploadTime') }}: {{ getUploadTime }}
          </div>
          <div class="resource-tag">{{ $t('ref') }}: {{ subrefCode }}</div>
        </ba2-list>

        <div class="resource-actions">
          <ba2-list direction="row" main-axis-allignment="center">
            <ba2-list
              v-for="action in submetaActions"
              :key="action.id"
              direction="row"
              class="action-group"
            >
              <span class="action-button" @click="action.click">{{
                $t(action.name)
              }}</span>
              <span>|</span>
            </ba2-list>
            <span class="action-button" @click="toggleAdvanced">{{
              showAdvanced ? $t('basic') : $t('advanced')
            }}</span>
          </ba2-list>
        </div>
      </ba2-list>
    </div>
    <div class="resource-description">
      <ba2-list cross-axis-allignment="start">
        <input
          v-if="edit && title !== '_ASSET_TITLE'"
          class="description-header editarea"
          :value="title"
          @change="titleChangeHandler"
        />
        <div v-else class="description-header">
          {{ title === '_ASSET_TITLE' ? $t('assetTitle') : title }}
        </div>
        <textarea
          v-if="edit"
          v-model="descriptionModle"
          class="description-content editarea"
          @change="descriptionChangeHandler"
        />
        <div v-else class="description-content">{{ description }}</div>
      </ba2-list>
    </div>
  </ba2-list>
</template>

<script>
import Ba2List from './Ba2List.vue'

function jsDateToDate(date) {
  const month = date.getMonth() + 1
  let monthdigits = ''
  if (month < 10) {
    monthdigits += '0'
  }
  return `${date.getDate()}/${monthdigits}${month}/${date.getFullYear()}`
}

function jsDateToTime(date) {
  const minutes = date.getMinutes()
  let minutesdigits = ''
  if (minutes < 10) {
    minutesdigits += '0'
  }
  return `${date.getHours()}:${minutesdigits}${date.getMinutes()}`
}

export default {
  name: 'Ba2ResourceBanner',
  components: { Ba2List },
  props: {
    type: {
      type: String,
      default: 'shorttext',
    },
    edit: {
      type: Boolean,
      default: false,
    },
    viewing: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'Untagged',
    },
    postDate: {
      type: Date,
      default: () => new Date(Date.now()),
    },
    refCode: {
      type: String,
      default: '#000',
    },
    submeta: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
      default: 'None',
    },
    uploadDate: {
      type: Date,
      default: () => new Date(Date.now()),
    },
    subrefCode: {
      type: String,
      default: '#000',
    },
    filetype: {
      type: String,
      default: 'None',
    },
    filesize: {
      type: String,
      default: '0B',
    },
    ip: {
      type: String,
      default: '0.0.0.0',
    },
    sha256: {
      type: String,
      default: 'NotAvailable',
    },
    metaActions: {
      type: Array,
      default: () => [],
    },
    submetaActions: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '_ASSET_TITLE',
    },
    description: {
      type: String,
      default: 'None',
    },
  },
  data() {
    return {
      showAdvanced: false,
      descriptionModle: this.description,
    }
  },
  computed: {
    getPostDate() {
      return jsDateToDate(this.postDate)
    },
    getPostTime() {
      return jsDateToTime(this.postDate)
    },
    getUploadDate() {
      return jsDateToDate(this.uploadDate)
    },
    getUploadTime() {
      return jsDateToTime(this.uploadDate)
    },
    getBannerClasses() {
      let classes = `at-${this.type}`
      if (this.viewing) {
        classes += ' at-viewing'
      } else {
        classes += ' at-nonviewing'
      }
      return classes
    },
  },
  methods: {
    toggleAdvanced() {
      this.showAdvanced = !this.showAdvanced
    },
    copyFileHash() {
      navigator.clipboard.writeText(this.sha256)
    },
    descriptionChangeHandler(e) {
      this.$emit('descriptionChange', e.target.value)
    },
    titleChangeHandler(e) {
      this.$emit('titleChange', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.dark-mode {
  $padding: 10px;
  $doublepadding: 20px;

  /* theme based on types */
  .at-nonviewing .resource-description {
    background: $gray;
  }
  .at-longtext {
    .resource-meta {
      background: $blue;
    }
    .action-button {
      color: $blue-foreground;
    }
    &.at-viewing .resource-description {
      background: $blue-dark;
    }
  }
  .at-shorttext {
    .resource-meta {
      background: $green;
    }
    .action-button {
      color: $green-foreground;
    }
    &.at-viewing .resource-description {
      background: $green-dark;
    }
  }
  .at-photoarchive {
    .resource-meta {
      background: $purple;
    }
    .action-button {
      color: $purple-foreground;
    }
    &.at-viewing .resource-description {
      background: $purple-dark;
    }
  }
  .at-filearchive {
    .resource-meta {
      background: $brown;
    }
    .action-button {
      color: $brown-foreground;
    }
    &.at-viewing .resource-description {
      background: $brown-dark;
    }
  }

  .banner-container {
    height: calc(220px - $padding);

    & > div {
      padding: 10px;
    }

    .resource-meta {
      width: calc(200px - $padding);

      .meta-container {
        height: 100%;
      }

      .tag-container {
        flex: 1;
      }

      .resource-tag {
        font-size: $typography-meta;
        line-height: 20pt;
      }

      .resource-actions {
        margin-left: -5px;

        span {
          font-size: $typography-meta;
        }
      }

      .action-button {
        padding: 0 5px;
        border-radius: 2px;
        user-select: none;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }

    .resource-meta.submeta {
      box-shadow: 4px 0px 20px -9px rgba(0, 0, 0, 0.75);
    }

    .resource-description {
      flex: 1;

      .description-header {
        height: 2.8em;
      }

      .description-content {
        overflow-x: auto;
        height: calc(calc(220px - calc($padding * 3)) - 2.8em);
      }

      .description-header.editarea {
        height: 1.4em;
        padding-bottom: 1.4em;
      }

      .editarea {
        padding: 0;
        background: transparent;
        width: 100%;
        caret-color: $foreground-white;

        border: none;
        resize: none;
        border-radius: 0;
        outline: none;
      }
    }
  }
}
</style>
