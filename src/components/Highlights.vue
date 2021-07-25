<template>
  <div class="highlights">
    <div v-for="(highlight, i) in highlights" :key="`highlight-${i}`">
      <v-row>
        <v-col cols="auto">
          <v-icon :color="highlight.colour" class="mt-8">circle</v-icon>
        </v-col>
        <v-col>
          <blockquote class="blockquote pb-2">{{ highlight.text }}</blockquote>
          <span class="text-subtitle-2 pl-6">Page {{ highlight.page }}</span>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    highlights() {
      return this.$store.state.selectedHighlights;
    },
  },
};
</script>

<style lang="scss" scoped>
.highlights {
  height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
