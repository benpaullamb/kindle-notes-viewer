<template>
  <div :style="{ 'border-left': `2px solid ${colour}` }">
    <span class="page">{{ page }}</span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    colour: {
      type: String,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  padding: 16px;
  display: grid;
  grid-template-columns: max-content 1fr;

  .page {
    padding-right: 16px;
    align-self: center;
  }
}
</style>
