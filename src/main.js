import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.config.productionTip = false

let app
//but on real production system, avoid to do that and put it in a specific configuration file.
var config = {
  apiKey: "AIzaSyBf_bJ3o65w-5QgvgW07HYW7YEBzkYoOPE",
  authDomain: "vue-firebase-tutorial-e17db.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-e17db.firebaseio.com",
  projectId: "vue-firebase-tutorial-e17db",
  storageBucket: "vue-firebase-tutorial-e17db.appspot.com",
  messagingSenderId: "639194412022"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
