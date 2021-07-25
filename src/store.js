import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const types = {
  SET_BOOK: 'set_book',
  SET_SELECTED_HIGHLIGHTS: 'set_selected_highlights',
};

export default new Vuex.Store({
  state: {
    book: null,
    selectedHighlights: null,
  },
  mutations: {
    [types.SET_BOOK](state, book) {
      state.book = { ...book };
    },
    [types.SET_SELECTED_HIGHLIGHTS](state, highlights) {
      state.selectedHighlights = [...highlights];
    },
  },
  actions: {
    setBook({ commit }, book) {
      commit(types.SET_BOOK, book);
    },
    setSelectedHighlights({ commit }, highlights) {
      let array = highlights;
      if (!array.length) {
        array = [highlights];
      }
      commit(types.SET_SELECTED_HIGHLIGHTS, array);
    },
  },
});
