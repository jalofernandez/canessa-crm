import Vue from 'vue'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { auth } from './firebase'

auth.onAuthStateChanged(user => {
  // user ? console.log(`onAuthStateChanged: ${user.email}`) : console.log(`onAuthStateChanged: ${user}`)
  if (user) {
    console.log(`onAuthStateChanged: ${user.email}`)
    const userAuth = {
      email: user.email,
      uid: user.uid,
      // name: user.name,
    }
    store.dispatch('isUserAuth', userAuth) // returns "user" data below
  } else {
    console.log(`onAuthStateChanged: ${user}`)
    store.dispatch('isUserAuth', user) // returns "user = null" cause there is not user session enabled
  }

  // we need to place Vue rendering instance inside user session check function cause first conditional have some delay 
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
