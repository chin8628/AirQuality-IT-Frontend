import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyAU8DCv2shs8Kn_p3fKzKDdNmPNmxqssf4',
  authDomain: 'aqi-it-kmitl.firebaseapp.com',
  databaseURL: 'https://aqi-it-kmitl.firebaseio.com',
  projectId: 'aqi-it-kmitl',
  storageBucket: 'aqi-it-kmitl.appspot.com',
  messagingSenderId: '678215101426',
}

export default (!firebase.apps.length ? firebase.initializeApp(config) : firebase.app())
