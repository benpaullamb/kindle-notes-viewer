<template>
  <div>
    <app-bar @on-load="setBook" />
    <main v-if="book">
      <table-of-contents
        :sections="book.sections.map(({ heading }) => heading)"
        @section-selected="setSelectedSection"
      />
      <div class="page-container">
        <div class="highlights-page">
          <highlight
            v-for="(highlight, i) in sectionHighlights"
            :key="`highlight-${i}`"
            :text="highlight.text"
            :colour="highlight.colour"
            :page="highlight.page"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue';
import TableOfContents from './components/TableOfContents.vue';
import Highlight from './components/Highlight.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    TableOfContents,
    Highlight,
  },
  data() {
    return {
      book: null,
      selectedSection: null,
    };
  },
  computed: {
    sectionHighlights() {
      if (!this.selectedSection) {
        return this.book.sections[0].highlights;
      }

      const section = this.book.sections.find((section) => section.heading === this.selectedSection);
      return section.highlights;
    },
  },
  methods: {
    setBook(book) {
      this.book = book;
    },

    setSelectedSection(section) {
      this.selectedSection = section;
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, Verdana, sans-serif;
}

main {
  display: grid;
  grid-template-columns: 20% 1fr;

  .page-container {
    display: flex;
    justify-content: center;
    .highlights-page {
      width: 80%;
      padding: 32px 0;
    }
  }
}
</style>
