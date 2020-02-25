import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import GetTextPlugin from "vue-gettext";
import translations from "./translations/translations.json";
import "./styles/scss/index.scss";

Vue.use(GetTextPlugin, {
  availableLanguages: {
    en_GB: "English",
    ru_RU: "Русский"
  },
  defaultLanguage: "ru_RU",
  silent: true,
  translations: translations
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
