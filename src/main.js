import Vue from 'vue';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import VueHotkey from "v-hotkey";
import '@/registerServiceWorker';

import i18n from '@/utils/i18n';

Vue.use(VueHotkey);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
