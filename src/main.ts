import { createApp } from 'vue';
import { createPinia } from 'pinia';
import naive from 'naive-ui';

import '@/styles/style.scss';

import App from './app/App.vue';

const app = createApp(App);

app.use(naive);
app.use(createPinia());

app.mount('#app');
