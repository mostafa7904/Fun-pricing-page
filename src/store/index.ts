import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playingGif: {},
    isPlaying: false, // is false by default
    timeout: 0,
    gif: {},
  },
  mutations: {
    stop(state) {
      state.isPlaying = false;
    },
    play(state) {
      state.isPlaying = true;
    },
    setTimeoutId(state, id: number) {
      state.timeout = id;
    },
    setGif(state, gif) {
      state.gif = gif;
    },
  },
  actions: {
    playOrStop({ commit, state }, gif) {
      commit("setGif", gif);
      clearTimeout(state.timeout);

      const timout = setTimeout(() => {
        commit("stop");
      }, gif.time);
      commit("setTimeoutId", timout);

      commit("play");
    },
  },
  getters: {
    isPlaying(state) {
      return state.isPlaying;
    },
  },
});
