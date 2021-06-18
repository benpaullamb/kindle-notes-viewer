<template>
  <div class="container">
    <app-bar @on-load="setBook" />
    <main v-if="book">
      <table-of-contents :sections="sections" />
      <div>
        <toolbar />
      </div>
    </main>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue';
import TableOfContents from './components/TableOfContents.vue';
import Toolbar from './components/Toolbar.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    TableOfContents,
    Toolbar,
  },
  data() {
    return {
      book: null,
    };
  },
  computed: {
    sections() {
      return this.book.sections.map((section) => ({
        heading: section.heading,
        page: section.highlights[0].page,
      }));
    },
  },
  methods: {
    setBook(book) {
      console.log(book);
      this.book = book;
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
  grid-template-columns: 25% 1fr;
}
</style>
