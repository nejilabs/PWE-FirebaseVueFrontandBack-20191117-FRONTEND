import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'; //629
import firebase from 'firebase/app'; //629

Vue.prototype.$axios = axios; //629
Vue.config.productionTip = false; //629

//START 730
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCN0SxZk-zSuM5_iXUSvbt4oQLhj-YBXMA",
  authDomain: "pwe-vue-firebase.firebaseapp.com",
  databaseURL: "https://pwe-vue-firebase.firebaseio.com",
  projectId: "pwe-vue-firebase",
  storageBucket: "pwe-vue-firebase.appspot.com",
  messagingSenderId: "483203126075",
  appId: "1:483203126075:web:42758c215448e4cdf45d1e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//END 730


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
