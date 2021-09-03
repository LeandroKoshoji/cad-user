import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { reactive } from 'vue'
import loggedUser  from './composables/useLoggedUser';

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

const { setLoggedUser } = loggedUser()

export const auth = firebase.auth()

export const authError = reactive({
    isError: false,
    message: ''
})

export const clearAuthError = () => {
    authError.isError = false;
    authError.message = ''
}

const getAuthErrorMessage = errorCode => ({
    "auth/email-already-in-use": "Erro: e-mail já cadastro",
    "auth/invalid-email": "Erro: e-mail inválido",
    "auth/operation-not-allowed": "Erro: operação não autorizada",
    "auth/weak-password": "Erro: senha muito fraca",
    "auth/user-disabled": "Erro:  email utilizado foi desabilitado em nosso sistema, por favor, faça um novo cadastro",
    "auth/user-not-found": "Erro: usuário não encontrado, verifique o e-mail digitado, ou cadastre-se para acessar a aplicação",
    "auth/wrong-password": "Erro: senha incorreta"

})[errorCode] || 'Erro inesperado, tente novamente'

export const getUserFromDB = async uid => {
   try{
    const userDoc = await usersCollection.doc(uid).get()

    return userDoc.data()
   }catch (error) {
    console.log(error)
    authError.isError = true
    authError.message = getAuthErrorMessage(error.code)
   }
}

export const createUser = async user => {
    try {
        const res = await auth.createUserWithEmailAndPassword(user.email, user.password)
        const uid = res.user.uid

        usersCollection.doc(uid).set(Object.assign({}, {...user, password: ""}))

        const userDoc = await getUserFromDB(uid)
        setLoggedUser({...userDoc, uid})
    } catch(error) {
        console.log(error)
        authError.isError = true
        authError.message = getAuthErrorMessage(error.code)
    }
}

export const updateUserDoc = async (uid, user) => {
    try{
        await usersCollection.doc(uid).update(user)
    }catch (error) {
        console.log(error)
        authError.isError = true
        authError.message = getAuthErrorMessage(error.code)
    }
 }

export const doLogin = async (user) => {
    try{
        const res = await auth.signInWithEmailAndPassword(user.email, user.password)
        const uid = res.user.uid

        const userDoc = await getUserFromDB(uid)
        setLoggedUser({...userDoc, uid})
    } catch(error) {
        console.log(error)
        authError.isError = true
        authError.message = getAuthErrorMessage(error.code)
    }
}

export const doLogout = () => auth.signOut()

export const deleteUserLogin = async () => {
    try{
        await auth.currentUser.delete()
        alert('Usuário excluído')
    } catch(error) {
        console.log(error)
        authError.isError = true
        authError.message = getAuthErrorMessage(error.code)
    }
}