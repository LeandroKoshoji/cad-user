import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { reactive } from 'vue'

const firebaseConfig = {
    apiKey: "AIzaSyCl2WUNCRBhYILxMqLtbaoDzGz2_BHGK0M",
    authDomain: "desafio-pontotel.firebaseapp.com",
    projectId: "desafio-pontotel",
    storageBucket: "desafio-pontotel.appspot.com",
    messagingSenderId: "657773440248",
    appId: "1:657773440248:web:c364ca324bdb23799bdf0d"
  };
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const usersCollection = db.collection('users')

const auth = firebase.auth()

export const authError = reactive({
    isError: false,
    message: ''
})

export const clearAuthError = () => {
    authError.isError = false;
    authError.errorMessage = ''
}

const getAuthErrorMessage = errorCode => ({
    "auth/email-already-in-use": "Erro: e-mail já cadastro",
    "auth/invalid-email": "Erro: e-mail inválido",
    "auth/operation-not-allowed": "Erro: operação não autorizada",
    "auth/weak-password": "Erro: senha muito fraca",
    "auth/user-disabled": "Erro:  email utilizado foi desabilitado em nosso sistema, por favor, faça um novo cadastro",
    "auth/user-not-found": "Erro: usuário não encontrado, verifique o e-mail digitado, ou cadastra-se para acessar a aplicação",
    "auth/wrong-password": "Erro: senha incorreta"

})[errorCode] || 'Erro inesperado, tente novamente'

export const createUser = user => {
    auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(userCredential => {
            const uid = userCredential.user.uid

            usersCollection.doc(uid).set(Object.assign({}, {...user, password: ""}))
        })
        .catch(error => {
            authError.isError = true
            authError.message = getAuthErrorMessage(error.code)
        })
}



export const doLogout = () => auth.signOut()