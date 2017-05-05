import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
  apiKey: 'AIzaSyDggXcrluVXaVkN0CxQ3FGp4fjDAquNc8Q',
  authDomain: 'bibille-brigade.firebaseapp.com',
  databaseURL: 'https://bibille-brigade.firebaseio.com',
  storageBucket: 'bibille-brigade.appspot.com'
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
