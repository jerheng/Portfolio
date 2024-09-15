import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueSmoothScroll from 'vue-smooth-scroll'

const app = createApp(App)
app.use(VueSmoothScroll, {
  duration: 500,
  offset: -80, // Adjust this value based on your navbar height
})
app.mount('#app')