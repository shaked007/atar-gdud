import { createApp } from 'vue'
import App from './App.vue'
import "core-js/stable";
import "regenerator-runtime/runtime";
import router from './router'
import "bootstrap/js/dist/dropdown.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
createApp(App).use(router).mount('#app')
