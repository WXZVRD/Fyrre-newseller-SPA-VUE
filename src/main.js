import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router.js";
import Markdown from 'vue3-markdown-it';

createApp(App)
    .use(Markdown)
    .use(router)
    .mount('#app')
