import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCl2WUNCRBhYILxMqLtbaoDzGz2_BHGK0M",
    authDomain: "desafio-pontotel.firebaseapp.com",
    projectId: "desafio-pontotel",
    storageBucket: "desafio-pontotel.appspot.com",
    messagingSenderId: "657773440248",
    appId: "1:657773440248:web:c364ca324bdb23799bdf0d"
  };

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
