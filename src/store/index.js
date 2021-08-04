import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { db } from '../firebase'
import { auth } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    /* --   OLD doggies JSON SAMPLE -- */
    // {
    //   "customerId": 1,
    //   "doggie": {
    //     "name": "andi",
    //     "breed": ["bichón maltés"],
    //     "mood": "Simpático jugetón"
    //   },
    //   "owner": [
    //     {
    //       "name": "lina",
    //       "phone": 696620723
    //     }
    //   ],
    //   "comment": "Es superbueno :)",
    //   "dates": [
    //     {
    //       "date": "2017-03-06T00:00:00-0400",
    //       "groom": null,
    //       "price": 28
    //     }
    //   ]
    // },
    /* -- "Clients" Data -- */
    // all "customers" data
    customers: [],

    // a specific single "client"
    client: {
      name: '',
      breed: '',
      mood: '',
      owner: '',
      ownerPhone: 0,
      guardian: '',
      guardianPhone: 0,
      comment: ''
    },

    /* -- "Users" Data -- */
    user: null,
    error: null,

    theme: 'light', // color theme by default

    loader: false, // page or sections loader spinner whatever
  },

  mutations: {
    // 1. SET all "customers" data from Firebase´s Firestore DB
    setCustomers(state, payload) {
      state.customers = payload
    },

    // 2. SET single "customer" (client) data from Firebase´s Firestore DB
    setClient(state, payload) {
      state.client = payload
    },

    // 5. DELETE a single "customer" (client) data into Firebase´s Firestore DB
    setClientRemoved(state, payload) {
      state.customers = state.customers.filter(client => client.id !== payload)
    },

    /* -- "Users" Data -- */

    // a. SET single user data from Firebase´s Auth
    setUser(state, payload) {
      state.user = payload
    },

    // b. SET (catch) Errors from Firebase´s Auth
    setError(state, payload) {
      state.error = payload
    },

    // c. SET "settings" as user preferences
    setTheme(state, payload) {
      state.theme = payload
      // localStorage.theme = payload
    },

    setLoader(state, payload) {
      state.loader = payload
    }
  },

  actions: {
    // 1. GET all "customers" data from Firebase´s Firestore DB by checking "user.email" to search is collection name
    getCustomers({commit, state}) {
      commit('setLoader', true)
      const customers = []
      db.collection(state.user.email)
        .get() // all Documents of a Firestore DB Collection
        .then(res => {
          res.forEach(document => {
            console.log(`
              ${document.id}
              ${document.data().name}
              --- 👌 ---
            `)
            let customer = document.data()
            customer.id = document.id
            customers.push(customer)
          })
          commit('setLoader', false)
          commit('setCustomers', customers)
        })
    },

    // 2. GET single "customer" (client) data from Firebase´s Firestore DB by checking "user.email" to search is collection name
    getClient({commit, state}, clientId) {
      db.collection(state.user.email)
        .doc(clientId) // a specific single Document of a Firestore DB Collection 
        .get()
        .then(document => {
          console.log(`
              ${document.id}
              ${document.data().name}
              ----- 🐶 -----
            `)
          let client = document.data()
          client.id = document.id

          commit('setClient', client)
        })
    },

    // 3. EDIT single "customer" (client) data from Firebase´s Firestore DB by checking "user.email" to search is collection name
    editClient({commit, state}, editedClient) {
      db.collection(state.user.email)
        .doc(editedClient.id) // a specific single Document of a Firestore DB Collection
        .update({
          name: editedClient.name,
          breed: editedClient.breed,
          mood: editedClient.mood,
          owner: editedClient.owner,
          ownerPhone: editedClient.ownerPhone,
          guardian: editedClient.guardian,
          guardianPhone: editedClient.guardianPhone,
          comment: editedClient.comment,
        })
        .then(() => {
          console.log(`
              Cliente "${editedClient.name}" editado
              ---- 🔄 ----
            `)
          router.push('/')
        })
    },

    // 4. ADD new single "customer" (client) data into Firebase´s Firestore DB by checking "user.email" to search is collection name
    addClient({commit, state}, addedClient) {
      commit('setLoader', true)
      db.collection(state.user.email)
        .add({
          name: addedClient.name,
          breed: addedClient.breed,
          mood: addedClient.mood,
          owner: addedClient.owner,
          ownerPhone: addedClient.ownerPhone,
          guardian: addedClient.guardian,
          guardianPhone: addedClient.guardianPhone,
          comment: addedClient.comment,
        }) // add new single Document with autogenerated ID into Firestore DB Collection
        // .doc().set(client.id) // add new single Document with custom ID passed as param into Firestore DB Collection
        .then(doc => {
          console.log(`
            Nuevo cliente "${doc.name}"
            ---- ✨ ----
          `)
          commit('setLoader', false)
          router.push('/')
        })
    },

    // 5. DELETE a single "customer" (client) data into Firebase´s Firestore DB by checking "user.email" to search is collection name
    removeClient({commit, state, dispatch}, deletedClientId) {
      db.collection(state.user.email)
        .doc(deletedClientId)
        .delete()
        .then(() => {
          console.log(`
            Cliente "${deletedClientId}" eliminado
            ---- 🔥 ----
          `)
          // We need reload "Home" page to update "customers" list cause Firestore is not RealTimeDB:
          // (option 1) with "dispatch" method but it´s not the perfect way cause need another query to server
          // dispatch('getCustomers')
          // (option 2) with "dispatch" method but it´s not the perfect way cause need another query to server
          commit('setClientRemoved', deletedClientId)
        })
    },

    /* -- "Users" Data -- */

    // a. SET new "user" in Firebase´s Auth DB
    createUser({commit}, userData) {
      auth.createUserWithEmailAndPassword(userData.email, userData.password) // just only two arguments accepted
          .then(res => {
            // 1. SET "user" info
            console.log(`
              Nuevo usuario: "${res.user.email}"
              ----- ✨ -----
            `)
            console.log(res) // all "user" obj data (res.user...)
            const userCreated = {
              email: res.user.email,
              uid: res.user.uid,
            }

            // 2. SET new Firebase´s Firestore DB collection with "user" email (it´s unique as "uid")
            db.collection(res.user.email)
              .add({
                name: 'Sparky',
                breed: 'Bichón Maltés',
                mood: 'Simpático',
                owner: 'Juan Doe Sr.',
                ownerPhone: '646901234',
                guardian: 'Juan Doe Jr.',
                guardianPhone: '',
                comment: 'Es bueno y sumiso aunque suele venir lleno de nudos.',
              })
              // 3. PUSH created user and go to route with all data
              .then(doc => {
                commit('setUser', userCreated)
                router.push('/')
              })
              .catch(err => console.log(err))
          })
          .catch(err => {
            console.log(`
              Error registro usuario: "${err.code}"
              -------- 🔥 -----------
            `)
            commit('setError', err)
          })
    },

    // b. GET exist "user" in Firebase´s Auth DB
    loginUser({commit}, userData) {
      auth.signInWithEmailAndPassword(userData.email, userData.password)
          .then(res => {
            console.log(res) // all "user" obj data (res.user...)
            const userLoggedIn = {
              email: res.user.email,
              uid: res.user.uid,
            }
            commit('setUser', userLoggedIn)
            router.push('/')
          })
          .catch(err => {
            console.log(`
              Error login usuario: "${err.code}"
              ------- 🔥 ---------
            `)
            commit('setError', err)
          })
    },

    // c. CLOSE "user" session in store
    logoutUser({commit}) {
      auth.signOut()
          .then(() => {
            console.log(`
              User signOut
              --- 🚪🏃 ---
            `)
            router.push('/login')
          })
    },

    // d. UPDATE "user" info after login to allow his data across platform
    isUserAuth({commit}, userAuth) {
      commit('setUser', userAuth)
    },

    // e. UPDATE "settings" as user preferences
    setTheme({commit}, theme) {
      commit('setTheme', theme)
      if (theme === 'light') {
        document.querySelector('html').classList.remove('dark')
        document.querySelector('html').classList.add('light')
        return
      }
      document.querySelector('html').classList.remove('light')
      document.querySelector('html').classList.add('dark')
    }
  },

  /* "getters" props are watchers to allow "state" info across webapp cause use "state" directly is not recommended */
  getters: {
    isUserLoggedIn(state) {
      return !!state.user
    },
    /* -- code above is equal than the following one -- */
    // isUserLoggedIn(state) {
    //   if (state.user === null) {
    //     return false
    //   } else {
    //     return true
    //   }
    // }
  },

  modules: {
  }
})
