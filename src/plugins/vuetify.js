import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            // https://colorscheme.ru/#3i31Tw0qMw0w0
            light: {
                primary: '#008080',
                secondary: '#0F368F',
                accent: '#D58E00',
                error: '#b71c1c',
            },
        },
    },
});
