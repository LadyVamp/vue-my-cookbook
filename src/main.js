import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import { store } from './store';
import VueYandexMetrika from 'vue-yandex-metrika';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(VueYandexMetrika, {
    id: 86162667,
    router: router,
    env: process.env.NODE_ENV,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
});

new Vue({
    router,
    store,
    vuetify,
    axios,
    render: (h) => h(App),
}).$mount('#app');
