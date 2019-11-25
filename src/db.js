import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB8A5agoSj-xJYqEALcBOiX1jJMrekVCGg',
  authDomain: 'toyshop-e6bd8.firebaseapp.com',
  databaseURL: 'https://toyshop-e6bd8.firebaseio.com',
  projectId: 'toyshop-e6bd8',
  storageBucket: 'toyshop-e6bd8.appspot.com',
  messagingSenderId: '101824660299',
  appId: '1:101824660299:web:1a6424e8d44de4b4c09ece',
  measurementId: 'G-DRKLHT8LLP'
}

export const db = firebase.initializeApp(firebaseConfig).firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
