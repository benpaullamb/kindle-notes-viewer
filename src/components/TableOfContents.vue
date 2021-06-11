<template>
  <div>
    <span class="heading">Table of Contents</span>
    <span v-for="section in sections" :key="section" class="section" @click="$emit('section-selected', section)">{{
      section
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  border-right: 1px solid grey;
}

.heading {
  padding: 16px;
  display: block;
  border-bottom: 1px solid grey;
  font-size: 20px;
}

.section {
  padding: 12px 16px;
  display: block;
  cursor: pointer;
  font-size: 20px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: #bbdefb;
  }
}
</style>
