import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

const alertMixin = {
    data() {
        return {
          alert: false
        }
      },
      methods: {
        toggleAlert() {
          this.alert = !this.alert
        }
      }
}

createApp(App)
    .mixin(alertMixin)
    .mount('#app')
