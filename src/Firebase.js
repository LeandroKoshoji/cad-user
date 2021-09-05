import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { reactive } from 'vue'
import loggedUser  from './composables/useLoggedUser';

const firebaseConfig = {
    apiKey: "AIzaSyDoxq-1JyLuwYkd6EqyN4P0fpDfkHGGPtM",
    authDomain: "cad-user-598ec.firebaseapp.com",
    projectId: "cad-user-598ec",
    storageBucket: "cad-user-598ec.appspot.com",
    messagingSenderId: "908766054542",
    appId: "1:908766054542:web:96892f0f283946028d61df"
  };
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const usersCollection = db.collection('users')

const { setLoggedUser } = loggedUser()

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
        const res = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        const uid = res.user.uid

        usersCollection.doc(uid).set(Object.assign({}, {...user, password: ""})) // Passando informações do Usuário, exceto Senha

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
 
export const deleteUserDoc = async (uid) => {
    try{
        await usersCollection.doc(uid).delete()
    } catch (error) {
        console.log(error)
        authError.isError = true
        authError.message = getAuthErrorMessage(error.code)
    }
} 

export const doLogin = async (user) => {
    try{
        await firebase.auth().setPersistence('session')
        const res = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        const uid = res.user.uid

        const userDoc = await getUserFromDB(uid) // Depois de logar, preencho o userState com informações do BD.
        setLoggedUser({...userDoc, uid})
    } catch(error) {
        console.log(error)
        authError.isError = true
        authError.message = getAuthErrorMessage(error.code)
    }
}

export const doLogout = () => firebase.auth().signOut()

export const deleteUserLogin = async () => {
    try{
        await firebase.auth().currentUser.delete()
        alert('Usuário excluído')
    } catch(error) {
        console.log(error)
        authError.isError = true
        authError.message = getAuthErrorMessage(error.code)
    }
}