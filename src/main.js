import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './plugins/element';
import i18n from './i18n';
import VueClipboard from 'vue-clipboard2';

Vue.config.productionTip = false;
// 复制非button组件设置
VueClipboard.config.autoSetContainer = true ;// add this line

// import {
//   MessageBox,
//   Message,
// } from 'element-ui';

// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$message = Message;

Vue.use(VueClipboard)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
