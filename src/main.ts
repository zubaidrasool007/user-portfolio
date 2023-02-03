import { createApp } from 'vue';
import { CellGroup, Col, Field, Form, Row, Uploader, Button } from 'vant';
import App from './App.vue';

import 'vant/lib/index.css';
import './assets/main.css';

const app = createApp(App);
app.use(Uploader);
app.use(Form)
app.use(Field);
app.use(Col);
app.use(Row);
app.use(Button);

app.mount('#app');
