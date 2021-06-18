<template>
  <div>
    <h2>Table of Contents</h2>
    <ul>
      <li v-for="section in sections" :key="`${section.page}-${section.heading}`">
        <span class="section-heading">{{ section.heading }}</span>
        <span class="section-page">{{ section.page }}</span>
      </li>
    </ul>
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
  padding: 2rem;
  display: inline-block;

  h2 {
    margin-bottom: 0.5rem;
  }

  li {
    margin-bottom: 0.25rem;
    display: flex;
    justify-content: space-between;

    .section-heading {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .section-page {
      margin-left: 1rem;
    }
  }
}
</style>
