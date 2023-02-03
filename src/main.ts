import { createApp } from 'vue';
import { Col, Field, Form, Row, Uploader, Button } from 'vant';
import { createI18n } from 'vue-i18n';

import store from './store';
import App from './App.vue';

import 'vant/lib/index.css';
import './assets/main.css';

import { inputTranslation } from './assets/translations/form.translation';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'turkic',
    messages: inputTranslation
});

const app = createApp(App);

// Register UI components
app.use(Uploader);
app.use(Form)
app.use(Field);
app.use(Col);
app.use(Row);
app.use(Button);

// Register i18n
app.use(i18n);

// Register Store
app.use(store);

app.mount('#app');
