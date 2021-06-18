<template>
  <div class="filters">
    <input v-model="searchedText" type="text" placeholder="Search for text or a page" />
    <dropdown :options="['pink', 'orange', 'yellow', 'blue']" v-model="selectedColour" class="dropdown" />
    <button @click="clearFilters">Clear</button>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue';

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      searchedText: '',
      selectedColour: '',
    };
  },
  methods: {
    clearFilters() {
      this.searchedText = '';
      this.selectedColour = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  padding: 2rem;
  display: flex;
  justify-content: center;

  input {
    width: 20rem;
    padding: 0.25rem 0.5rem;
    font-size: 16px;
    border: 1px solid grey;
    border-radius: 0.25rem;
  }

  .dropdown {
    margin-left: 2rem;
  }

  button {
    min-width: 5rem;
    padding: 0.25rem 0.5rem;
    margin-left: 2rem;
    user-select: none;
    cursor: pointer;
    background: #febd69;
    border: 1px solid #c88719;
    border-radius: 0.25rem;
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
