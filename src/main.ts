import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// import {createBootstrap} from 'bootstrap-vue-next'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

const app = createApp(App)
// app.use(createBootstrap())
// const vuetify = createVuetify({
//   components,
//   directives,
// })
// app.use(vuetify)

app.use(createPinia())
app.use(router)

app.mount('#app')
