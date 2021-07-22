import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBLmxvWjB7cpTU3Ut1lxrj5Al-IvU1YZA0',
  authDomain: 'canessa-crm.firebaseapp.com',
  projectId: 'canessa-crm',
  storageBucket: 'canessa-crm.appspot.com',
  messagingSenderId: '1057971718950',
  appId: '1:1057971718950:web:057c9b9b1526d963160fe7'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }
