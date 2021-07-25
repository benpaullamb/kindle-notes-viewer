<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title
        >Kindle Notes Viewer
        <span class="font-weight-bold">- {{ title }}</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="4">
            <notes-list />
          </v-col>

          <v-col cols="8">
            <highlights />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NotesList from './components/NotesList.vue';
import Highlights from './components/Highlights.vue';

export default {
  name: 'App',
  components: {
    NotesList,
    Highlights,
  },
  computed: {
    title() {
      return this.$store.state.book?.title;
    },
  },
};
</script>
