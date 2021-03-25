import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//font-awesome
import '@fortawesome/fontawesome-free/css/all.min.css';
//animate.css
import 'animate.css';

createApp(App)
.use(router)
.mount('#app');
