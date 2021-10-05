import firebase from 'firebase/app';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAUeCWHlMg5NvmhmwUHUWGfocV_z0xBgB0",
    authDomain: "proyectoreactdariopirozzo.firebaseapp.com",
    projectId: "proyectoreactdariopirozzo",
    storageBucket: "proyectoreactdariopirozzo.appspot.com",
    messagingSenderId: "565355371107",
    appId: "1:565355371107:web:353a085b2646c40b717656"
  };

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}
export const getFirestore = () => {
    return firebase.firestore(app)
}