import Vue from 'vue'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/css/tailwind.css'

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: process.env.VUE_APP_GQL_API
  })
})

Vue.use(VueApollo)

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
