import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'axios/dist/axios.js';

import VTooltip from 'v-tooltip';
Vue.use(VTooltip);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
