import Vue from 'vue'
import axios from 'axios'
import Buefy from 'buefy'
import VueQrcode from '@xkeshi/vue-qrcode'
import VueClipboard from 'vue-clipboard2'
import moment from 'moment'

import App from './App'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faCopy, faCheckCircle, faSyncAlt, faSlidersH, faArrowLeft, faKey, faTrash, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { app } = require('electron').remote

Vue.prototype.$appVersion = app.getVersion();
Vue.prototype.$appName = app.getName();

library.add(faCopy, faCheckCircle, faSyncAlt, faSlidersH, faArrowLeft, faKey, faTrash, faQuestionCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component(VueQrcode.name, VueQrcode)
Vue.use(VueClipboard)
Vue.use(Buefy)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(value).format("MMM DD, YYYY");
  }
});

Vue.filter("formatTime", function (value) {
  if (value) {
    return moment(value).format("h:mm A");
  }
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
