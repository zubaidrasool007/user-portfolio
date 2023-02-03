import { createApp } from 'vue';
import { Field, Uploader } from 'vant';
import App from './App.vue';

import 'vant/lib/index.css';
import './assets/main.css';

const app = createApp(App);
app.use(Field);
app.use(Uploader);

app.mount('#app');
