<template>
  <div>
    <div v-for="(highlight, i) in highlights" :key="`highlight-${i}`">
      <v-row>
        <v-col cols="auto">
          <v-icon :color="highlight.colour" class="mt-4">circle</v-icon>
        </v-col>
        <v-col>
          <blockquote class="blockquote">{{ highlight.text }}</blockquote>
          <span class="text-subtitle-2">Page {{ highlight.page }}</span>
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

<style></style>
