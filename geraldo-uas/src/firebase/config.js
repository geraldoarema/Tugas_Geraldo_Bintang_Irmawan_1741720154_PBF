import 'firebase/auth';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAcsvTPUAAtshEtX09c-9Za7LS0dldRxI8',
  authDomain: 'geraldo-uas.firebaseapp.com',
  databaseURL: 'https://geraldo-uas.firebaseio.com',
  projectId: 'geraldo-uas',
  storageBucket: 'geraldo-uas.appspot.com',
  messagingSenderId: '962048771801',
  appId: '1:962048771801:web:752cfc66703611a7df60c8',
  measurementId: 'G-FT7DNZYC0N',
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
