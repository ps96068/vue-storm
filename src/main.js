import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import * as fb from 'firebase';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyChFuznS6IRpctwOjIbF_TSDUkFZrdxxqY',
  authDomain: 'vue-webstorm.firebaseapp.com',
  databaseURL: 'https://vue-webstorm.firebaseio.com',
  projectId: 'vue-webstorm',
  storageBucket: 'vue-webstorm.appspot.com',
  messagingSenderId: '309620281336',
  appId: '1:309620281336:web:0deeec2759e83367'
};

fb.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App),
/*  created () {
    var config = {
      apiKey: 'AIzaSyChFuznS6IRpctwOjIbF_TSDUkFZrdxxqY',
      authDomain: 'vue-webstorm.firebaseapp.com',
      databaseURL: 'https://vue-webstorm.firebaseio.com',
      projectId: 'vue-webstorm',
      storageBucket: 'vue-webstorm.appspot.com',
      messagingSenderId: '309620281336',
      appId: '1:309620281336:web:0deeec2759e83367'
    }

    fb.initializeApp(config)
  }*/
}).$mount("#app");
