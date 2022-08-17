import {
    createApp
} from 'vue'
import App from './App.vue'
import UiComponents from '@/components/UI/index.js'
import router from '@/router/router.js'
import derectives from '@/directives/index.js'

const app = createApp(App).use(router)

UiComponents.forEach(component => {
    app.component(component.name, component)
})

derectives.forEach(derective => {
    app.directive(derective.name, derective)
})

app.mount('#app')