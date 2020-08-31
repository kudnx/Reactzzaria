import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBWGEXg-pK_juE2YX5ktj_kr9pNotfYdRY',
  authDomain: 'reactzzaria-78b02.firebaseapp.com',
  databaseURL: 'https://reactzzaria-78b02.firebaseio.com',
  projectId: 'reactzzaria-78b02',
  storageBucket: 'reactzzaria-78b02.appspot.com',
  messagingSenderId: '750951227927',
  appId: '1:750951227927:web:362381ce4e1fd7d1c8b252',
  measurementId: 'G-9Z11EE5XSC'
}

firebase.initializeApp(firebaseConfig)

export default firebase
