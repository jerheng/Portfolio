import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import vIntersect from './directives/vIntersect'

const app = createApp(App)
app.directive('intersect', vIntersect)
app.mount('#app')