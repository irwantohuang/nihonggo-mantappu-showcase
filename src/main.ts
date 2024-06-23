import { createApp } from 'vue'
import { registerPlugins } from './plugins/plugins'
import "./styles/main.css"
import App from './App.vue'


const app = createApp(App);
registerPlugins(app);
app.mount('#app')
