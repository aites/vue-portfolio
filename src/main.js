import Vue from 'vue'
import App from './App'
import 'ant-design-vue/dist/antd.css';
import './style/reset.css';
import { Button } from 'ant-design-vue';
Vue.use(Button);
import { Icon } from 'ant-design-vue';
Vue.use(Icon);
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
