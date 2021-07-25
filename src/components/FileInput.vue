<template>
  <div>
    <input type="file" accept="text/html" ref="fileInput" />
    <v-btn elevation="2" @click="openInput">Import</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
      console.log(book);
      this.setBook(book);
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
    ...mapActions(['setBook']),
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
</style>
