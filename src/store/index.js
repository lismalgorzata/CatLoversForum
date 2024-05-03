import { createStore } from "vuex";
import firebase from "./modules/firebase";
import chatgpt from './modules/chatgpt'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { firebase, chatgpt }
});
