import { createApp } from 'vue'
import App from './App.vue'
import translatePlugin from './translatePlugin'
import './theme.css'

const app = createApp(App)

const ru = {
    app: {
        title: 'Как работают плагины во Vue?',
        changeBtn: 'Переключить язык'
    }
}
const en = {
    app: {
        title: 'How plugind work in Vue?',
        changeBtn: 'Toggle Language'
    }
}

app.use(translatePlugin, { ru, en })

app.mount('#app')

// app.directive('focus', {
//     mounted(el) {
//         el.focus()
//     }
// })
