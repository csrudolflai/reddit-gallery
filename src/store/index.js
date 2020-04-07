import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify';
import { make } from 'vuex-pathify';

Vue.use(Vuex)

const state = {
  post_title: "",
  post_selftext_html: "",
  post_score: 0
};
const mutations = make.mutations(state);


export default new Vuex.Store({
  plugins: [pathify.plugin],
  state: state,
  mutations: mutations,
})
