<template>
  <header>
    <h1>Kindle Notes Viewer</h1>
    <file-input @on-load="(book) => $emit('on-load', book)" />
  </header>
</template>

<script>
import FileInput from './FileInput.vue';

export default {
  components: {
    FileInput,
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  user-select: none;
  background: #131921;

  h1 {
    color: white;
  }
}
</style>
