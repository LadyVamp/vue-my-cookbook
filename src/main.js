import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import { store } from './store';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
	axios,
    render: (h) => h(App),
}).$mount('#app');
