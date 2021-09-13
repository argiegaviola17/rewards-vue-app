import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/app.css'
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';

export const app = createApp(App)
app.use(router).mount('#app')

const VueDynamicForms = createDynamicForms({});
app.use(VueDynamicForms);
