<template>
  <v-list two-line>
    <file-input class="mb-4"></file-input>

    <div v-for="(section, i) in sections" :key="`section-${i}`">
      <v-divider v-if="i !== 0"></v-divider>

      <v-subheader>{{ section.heading }}</v-subheader>

      <v-list-item
        v-for="(highlight, j) in section.highlights"
        :key="`highlight-${i}-${j}`"
        @click="() => setSelectedHighlights(highlight)"
      >
        <v-list-item-icon>
          <v-icon :color="highlight.colour">circle</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ highlight.text }}</v-list-item-title>
          <v-list-item-subtitle>Page {{ highlight.page }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
import { mapActions } from 'vuex';
import FileInput from './FileInput.vue';

export default {
  props: {},
  components: {
    FileInput,
  },
  computed: {
    sections() {
      return this.$store.state.book?.sections;
    },
  },
  methods: {
    ...mapActions(['setSelectedHighlights']),
  },
};
</script>

<style></style>
