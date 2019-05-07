/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import Vuetify from "vuetify";
import VueCordova from "vue-cordova";

import VueHead from "vue-head";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
import "./css/stylus-overrides.styl";
import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loader
Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons.


Vue.use(Vuetify, {
  theme: {
    primary: "#4CAF50",
    secondary: "#424242",
    accent: "#0051a0",
    error: "#FF5252",
    info: "#2196F3",
    success: "#077FFF",
    warning: "#FFC107"
  },
  iconfont: "fa",
  iconfont: 'md',
  iconfont: "mdi",
  iconfont: 'faSvg',
  iconfont: 'fa4'

});
Vue.use(VueCordova);
Vue.use(VueHead);

Vue.config.productionTip = false;
/* eslint-disable no-new */
// add cordova.js only if serving the app through file://
if (window.location.protocol === "file:" || window.location.port === "3000") {
  var cordovaScript = document.createElement("script");
  cordovaScript.setAttribute("type", "text/javascript");
  cordovaScript.setAttribute("src", "cordova.js");
  document.body.appendChild(cordovaScript);
}
new Vue({
  el: "#app",
  router,
  axios,
  // render: h => h(App)
  template: "<App/>",
  components: { App },
  head: {
    meta: [
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
      }
    ]
  }
});
