<template>
  <div class="file-input">
    <input type="file" accept="text/html" ref="fileInput" />
    <div class="bar">
      <div class="type">
        <span>HTML</span>
      </div>
      <div class="main">
        <span>{{ fileName }}</span>
      </div>
      <button @click="openInput">
        <span class="material-icons">
          file_upload
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import kindleToJson from '../kindle-to-json';

export default {
  data() {
    return {
      file: null,
    };
  },
  watch: {
    async file(value) {
      const book = await kindleToJson(value);
      this.$emit('on-load', book);
    },
  },
  computed: {
    fileName() {
      return this.file?.name || 'No file uploaded';
    },
  },
  mounted() {
    const vue = this;
    this.$refs.fileInput.addEventListener(
      'change',
      function() {
        if (this.files?.[0]) {
          vue.file = this.files[0];
        }
      },
      false
    );
  },
  methods: {
    openInput() {
      this.$refs.fileInput.click();
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  display: none;
}

.file-input {
  max-width: 500px;

  .bar {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    border: 4px solid #febd69;
    border-radius: 4px;

    .type {
      height: 100%;
      padding: 12px;
      background: #f3f3f3;
      border-right: 1px solid lightgrey;

      span {
        font-size: 14px;
      }
    }

    .main {
      padding: 12px;
      background: white;

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    button {
      height: 100%;
      padding: 0 8px;
      cursor: pointer;
      background: #febd69;
      border: none;

      span {
        font-size: 30px;
      }
    }
  }
}
</style>
