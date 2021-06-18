<template>
  <div class="dropdown">
    <div @click="open = !open" class="selected">
      <span class="value">{{ value }}</span>
      <span class="material-icons">arrow_drop_down</span>
    </div>
    <div v-if="open" class="options">
      <span v-for="option in ['All', ...options]" :key="option" @click="select(option)">{{ option }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  created() {
    window.addEventListener('mousedown', this.onClick);
  },
  destroyed() {
    window.removeEventListener('mousedown', this.onClick);
  },
  methods: {
    select(option) {
      this.open = false;
      this.$emit('input', option);
    },
    onClick({ path }) {
      const isOnDropdown = path.some((el) => el.classList?.contains('dropdown'));
      if (!isOnDropdown && this.open) {
        this.open = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  width: 10rem;
  cursor: pointer;
  user-select: none;

  span {
    display: block;
  }

  .selected {
    padding: 0.25rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid grey;
    border-radius: 0.25rem;

    .value {
      text-transform: capitalize;
    }
  }

  .options {
    width: 10rem;
    position: absolute;
    z-index: 10;
    background: white;
    border: 1px solid grey;
    border-top: none;
    border-radius: 0.25rem;

    span {
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
    }
  }
}
</style>
